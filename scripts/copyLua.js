const util = require("util")
const replaceAll = require("string.prototype.replaceall")
const copyfiles = util.promisify(require("copyfiles"))
const files = require("files")
const isAsyncFn = require("is-async-function")
const Path = require("path")
const fs = require("fs")
const { BuildParser, BuildFileNotFound } = require("./buildParser")
const { ModuleInformant, TsconfigFileNotFound } = require("./moduleInformant")
const { execSync } = require("child_process")

const logJson = (name, obj) => {
    fs.writeFileSync(name, JSON.stringify(obj), "utf-8")
}

class CopyLua {
    DEFAULT_INPUT_LUA_DIRS = ["./"]
    DEFAULT_PATH = process.cwd()
    moduleInformant = new ModuleInformant(this.DEFAULT_PATH)
    LUALIB_BUNDLE_NAME = "lualib_bundle"

    getInputLuaDirs(path = this.DEFAULT_PATH) {
        let buildNotFound = false
        let tsconfigNotFound = false
        let list = []
        let outDir
        let rootDir
        try {
            const buildParser = new BuildParser(path)
            list = buildParser.getList()
        } catch (e) {
            if (e instanceof BuildFileNotFound) {
                buildNotFound = true
            } else {
                throw e
            }
        }
        try {
            const moduleInformant = new ModuleInformant(path)
            const outDirExists = list.find(
                path => Path.resolve(path) === Path.resolve(moduleInformant.outDir)
            )
            if (!outDirExists) {
                list.push(moduleInformant.outDir)
            }
            outDir = moduleInformant.outDir
            rootDir = moduleInformant.rootDir
        } catch (e) {
            if (e instanceof TsconfigFileNotFound) {
                tsconfigNotFound = true
                outDir = this.moduleInformant.DEFAULT_OUT_DIR
                rootDir = this.moduleInformant.DEFAULT_ROOT_DIR
            } else {
                throw e
            }
        }
        if (buildNotFound && tsconfigNotFound) {
            list = this.DEFAULT_INPUT_LUA_DIRS
        }
        if (list.includes(this.moduleInformant.MODULES_DIR)) {
            const index = list.indexOf(this.moduleInformant.MODULES_DIR)
            list.splice(index, 1)
        }
        return [list, outDir, rootDir]
    }

    async recursiveLs(path, changeFiles) {
        let fsx = await files.ls(path)
        const result = { files: [] }
        for (const f of fsx) {
            if (await files.stat(f).isDirectory()) {
                result[f] = await this.recursiveLs(f, changeFiles)
            } else {
                result.files.push(f)
            }
        }
        if (typeof changeFiles === "function") {
            const isAsync = isAsyncFn(changeFiles)
            result.files = isAsync ? await changeFiles(fsx) : changeFiles(fsx)
        }
        return result
    }

    expandPaths(dir) {
        const files = Object.entries(dir)
            .filter(([key, _]) => key !== "files")
            .reduce((acc, [_, dir]) => [...acc, ...this.expandPaths(dir)], [])
        return [...dir.files, ...files]
    }

    async getLuaScripts(filesFn) {
        console.log("Получение lua скриптов")
        const luaScripts = {}
        for (const module of this.moduleInformant.modulesList) {
            const [luaDirs, luaOutDir, rootDir] = this.getInputLuaDirs(module)
            // console.log("Папки модуля", module, ":", luaDirs)
            // for (const luaDir of luaDirs) {
            const luaDir = luaOutDir
            const luaScriptsKey = Path.join(module, luaDir)
            const isLuaFile = path => Path.parse(path).ext === ".lua"
            const isNotModule = path => Path.basename(path) !== this.moduleInformant.MODULES_DIR
            const isNotBundle = path => Path.basename(path) !== this.LUALIB_BUNDLE_NAME + ".lua"
            const predicate = file => {
                const isLua = isLuaFile(file)
                const notModules = isNotModule(file)
                const notBundle = isNotBundle(file)
                if (luaDirs.find(dir => Path.resolve(dir) === Path.resolve(Path.dirname(file)))) {
                    return isLua && notBundle && notModules
                }
                return isLua && notBundle
            }
            const changeFiles = async fsx => {
                let luaFiles = fsx.filter(predicate)
                if (typeof filesFn === "function") {
                    luaFiles = isAsyncFn(filesFn)
                        ? await filesFn(luaFiles, luaScriptsKey, module, [
                              luaDir,
                              luaOutDir,
                              rootDir
                          ])
                        : filesFn(luaFiles, luaScriptsKey, module, [luaDir, luaOutDir, rootDir])
                }
                return luaFiles
            }
            const firstLs = await files.ls(luaScriptsKey)
            const dirs = []
            const fsx = []
            for (const path of firstLs) {
                if ((await files.stat(path).isDirectory()) && isNotModule(path)) {
                    dirs.push(path)
                } else {
                    fsx.push(path)
                }
            }
            luaScripts[luaScriptsKey] = { files: changeFiles(fsx) }
            for (const dir of dirs) {
                luaScripts[luaScriptsKey][dir] = await this.recursiveLs(dir, changeFiles)
            }
            // }
        }
        return luaScripts
    }

    getRequireCalls(luaFileContent) {
        
        const calls = luaFileContent.match(/require\s*\(?\s*[\"\'][\w\.-]*[\"\']\s*\)?/gm)
        return calls || []
    }

    getRequirePath(requireCall) {
        return requireCall.split(/(\"|\')/)[2]
    }

    getNewRequirePath(requirePath, luaFiles) {
        const pathParts = Path.join(
            this.moduleInformant.outDir,
            "/node_modules/",
            requirePath.replaceAll(".", "/")
        )
        // console.log('pathParts', pathParts)
        const path = Path.resolve(pathParts) + ".lua"
        // console.log("path", path)
        // console.log(requirePath)
        // console.log(this.moduleInformant.LUALIB_BUNDLE_NAME)
        return !luaFiles.includes(path) && requirePath !== this.LUALIB_BUNDLE_NAME
            ? `${this.moduleInformant.MODULES_DIR}.${requirePath}`
            : requirePath
    }

    getNewRequirePathSimple(requirePath) {
        // console.log(requirePath)
        // console.log(this.LUALIB_BUNDLE_NAME)
        return requirePath !== this.LUALIB_BUNDLE_NAME &&
            requirePath.split(".")[0] !== this.moduleInformant.MODULES_DIR
            ? `${this.moduleInformant.MODULES_DIR}.${requirePath}`
            : requirePath
    }

    getNewRequireCall(requirePath) {
        return `require("${requirePath}")`
    }

    correctRequirePaths(luaScripts) {
        const luaFiles = luaScripts.map(path => Path.resolve(path))
        // console.log("luaFiles", luaFiles)
        // console.log()
        for (const luaFile of luaFiles) {
            // console.log("file", luaFile)
            let content = fs.readFileSync(luaFile, "utf-8")
            const requireCalls = this.getRequireCalls(content)
            // console.log("oldRequireCalls", requireCalls)
            if (requireCalls.length === 0) {
                continue
            }
            let pos0 = 0
            for (const requireCall of requireCalls) {
                // console.log("oldRequireCall", requireCall)
                const pos = content.indexOf(requireCall, pos0)
                const requirePath = this.getRequirePath(requireCall)
                // const newRequirePath = this.getNewRequirePath(requirePath, luaFiles)
                const newRequirePath = this.getNewRequirePathSimple(requirePath)
                const newRequireCall = this.getNewRequireCall(newRequirePath)
                // console.log("oldRequirePath", requirePath)
                // console.log("newRequirePath", newRequirePath)
                // console.log("newRequireCall", newRequireCall)
                const oldPos = pos + requireCall.length
                content = content.substring(0, pos) + newRequireCall + content.substring(oldPos)
                const newPos = pos + newRequireCall.length
                pos0 = newPos
            }
            fs.writeFileSync(luaFile, content, "utf-8")
            // console.log("CONTENT")
            // console.log(content)
            // console.log()
            // break
            // console.log("requireCalls", requireCalls)
            // console.log("requirePaths", requirePaths)
            // console.log("newRequirePaths", newRequirePaths)
            // console.log()
        }
    }

    async moveCopiedFiles(luaScripts, luaOutDirs, rootDirs) {
        console.log("Перемещение скриптов")
        for (const [moduleOutDir, _] of Object.entries(luaScripts)) {
            // console.log("moduleOutDir", moduleOutDir)

            const inputDir = Path.join(this.moduleInformant.outDir, moduleOutDir).replaceAll(
                "\\",
                "/"
            )

            if (!fs.existsSync(inputDir)) {
                continue
            }

            const module = this.moduleInformant.modulesList.find(module =>
                moduleOutDir.includes(module, 0)
            )
            const luaOutDir = luaOutDirs[moduleOutDir].replaceAll("\\", "/")
            const rootDir = rootDirs[moduleOutDir].replaceAll("\\", "/")

            // console.log("luaOutDir", luaOutDir)
            // console.log("rootDir", rootDir)

            const outputDir = Path.join(this.moduleInformant.outDir, module, rootDir)
            if (Path.resolve(inputDir) === Path.resolve(outputDir)) {
                continue
            }
            const rootDirPaths = rootDir.split("/")
            let outDirPath = Path.join(this.moduleInformant.outDir, module)
            for (const rootDirPath of rootDirPaths) {
                outDirPath = Path.join(outDirPath, rootDirPath).replaceAll("\\", "/")
                // console.log(outDirPath)
                if (!fs.existsSync(outDirPath)) {
                    fs.mkdirSync(outDirPath)
                }
            }
            let input = inputDir
            let output = outputDir
            input = input.replaceAll("\\", "/")
            output = output.replaceAll("\\", "/")
            // input = `${input}/*`
            // console.log("inputDir", input)
            // console.log("outputDir", output)
            const fsx = await files.ls(input)
            for (const f of fsx) {
                // const newF = f.replace(moduleOutDir, `${module}\\`)
                const newF = f.replace(moduleOutDir, Path.join(module, rootDir))
                const isOutDir = newF.includes(moduleOutDir)
                // console.log(f)
                // console.log(newF)

                if (isOutDir) {
                    continue
                }
                // console.log(newF)
                fs.rmSync(newF, { recursive: true, force: true })
                execSync(`mv -f ${f} ${newF}`)
            }
            const pathToEmptyOut = Path.resolve(
                Path.join(this.moduleInformant.outDir, module, luaOutDir.split("/")[0])
            )
            // console.log("pathToEmptyOut", pathToEmptyOut)
            const isNotRoot =
                Path.resolve(this.moduleInformant.outDir, moduleOutDir) !== pathToEmptyOut
            // console.log("isNotRoot", isNotRoot)
            if (isNotRoot) {
                fs.rmSync(pathToEmptyOut, { recursive: true, force: true })
            }
        }
    }

    async copy() {
        let inputFiles = []
        const luaFilesCopied = {}
        // const start = new Date().getTime()
        const luaOutDirs = {}
        const rootDirs = {}
        const luaScripts = await this.getLuaScripts(
            async (luaFiles, luaScriptsKey, module, [luaDir, luaOutDir, rootDir]) => {
                luaScriptsKey = luaScriptsKey.replace("/", "\\")
                luaFilesCopied[luaScriptsKey] ??= []
                luaOutDirs[luaScriptsKey] ??= luaOutDir
                rootDirs[luaScriptsKey] ??= rootDir
                luaFiles = luaFiles.map(file => {
                    const path = file.substr(file.indexOf(luaScriptsKey), file.length)
                    let newLuaFile = Path.join(this.moduleInformant.outDir, path)
                    // if (luaDir === luaOutDir && luaDir !== "./" && luaDir !== ".\\") {
                    //     newLuaFile = newLuaFile.replace(
                    //         luaScriptsKey,
                    //         // Path.join(this.moduleInformant.MODULES_DIR, module)
                    //         module
                    //     )
                    // }
                    if (!luaFilesCopied[luaScriptsKey].includes(newLuaFile)) {
                        luaFilesCopied[luaScriptsKey].push(newLuaFile)
                    }
                    return path
                })
                // console.log(luaFiles)
                inputFiles = [...inputFiles, ...luaFiles]
                return luaFiles
            }
        )
        // console.log(inputFiles)
        console.log("Копирование lua скриптов")
        // console.log(this.moduleInformant.modulesList)
        // console.log(luaOutDirs)
        await copyfiles([...inputFiles, this.moduleInformant.outDir])
        for (const [_, luaFiles] of Object.entries(luaFilesCopied)) {
            this.correctRequirePaths(luaFiles)
        }
        await this.moveCopiedFiles(luaScripts, luaOutDirs, rootDirs)

        // console.log(Object.keys(luaScripts))
        // console.log(Object.keys(luaFilesCopied))
        // console.log(Object.values(luaFilesCopied))
        // console.log(Object.keys(luaScripts) === Object.keys(luaFilesCopied))
        // console.log(luaScripts)
        // logJson("scripts/log.json", luaScripts)
        // console.log(luaFilesCopied)
        // const end = new Date().getTime()
        // console.log(`${end - start}ms`)
    }

    async test() {
        const start = new Date().getTime()
        // const dir = await this.recursiveLs(__dirname)
        // console.log(this.expandPaths(dir))
        // console.log(this.getInputLuaDirs())
        // console.log(this.moduleInformant.modulesList)
        // console.log(await this.getLuaScripts())

        // const content = fs.readFileSync(Path.join(__dirname, "init.lua"), "utf-8")
        // const requireCalls = this.getRequireCalls(content)
        // console.log(requireCalls)
        // console.log(this.getRequirePaths(requireCalls))

        await this.copy()
        // const luaScripts = await this.getLuaScripts()
        const end = new Date().getTime()
        console.log(`${end - start}ms`)
    }
}

;(async () => {
    const copyLua = new CopyLua()
    await copyLua.test()
})()

module.exports = CopyLua
