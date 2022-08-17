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

class CopyLua {
    DEFAULT_INPUT_LUA_DIRS = ["./"]
    DEFAULT_PATH = process.cwd()
    moduleInformant = new ModuleInformant(this.DEFAULT_PATH)
    LUALIB_BUNDLE_NAME = "lualib_bundle.lua"

    getInputLuaDirs(path = this.DEFAULT_PATH) {
        let buildNotFound = false
        let tsconfigNotFound = false
        let list = []
        let outDir
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
        } catch (e) {
            if (e instanceof TsconfigFileNotFound) {
                tsconfigNotFound = true
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
        return [list, outDir]
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
            const [luaDirs, luaOutDir] = this.getInputLuaDirs(module)
            // console.log("Папки модуля", module, ":", luaDirs)
            for (const luaDir of luaDirs) {
                const luaScriptsKey = Path.join(module, luaDir)
                luaScripts[luaScriptsKey] = await this.recursiveLs(luaScriptsKey, async fsx => {
                    const predicate = file => {
                        const isLua = Path.parse(file).ext === ".lua"
                        const notModules = Path.basename(file) !== this.moduleInformant.MODULES_DIR
                        const notBundle = Path.basename(file) !== this.LUALIB_BUNDLE_NAME
                        if (
                            luaDirs.find(
                                dir => Path.resolve(dir) === Path.resolve(Path.dirname(file))
                            )
                        ) {
                            return isLua && notBundle && notModules
                        }
                        return isLua && notBundle
                    }
                    let luaFiles = fsx.filter(predicate)
                    if (typeof filesFn === "function") {
                        luaFiles = isAsyncFn(filesFn)
                            ? await filesFn(luaFiles, luaScriptsKey, module, [luaDir, luaOutDir])
                            : filesFn(luaFiles, luaScriptsKey, module, [luaDir, luaOutDir])
                    }
                    return luaFiles
                })
            }
        }
        return luaScripts
    }

    getRequireCalls(luaFileContent) {
        const calls = luaFileContent.match(/require\s*\(?\s*[\"\'][\w\.]*[\"\']\s*\)?/gm)
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
        return !luaFiles.includes(path) && requirePath !== "lualib_bundle"
            ? `${this.moduleInformant.MODULES_DIR}.${requirePath}`
            : requirePath
    }

    getNewRequirePathSimple(requirePath) {
        return requirePath !== "lualib_bundle" &&
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
            if (requireCalls.length === 0) {
                continue
            }
            let pos0 = 0
            for (const requireCall of requireCalls) {
                // console.log('oldRequireCall', requireCall)
                const pos = content.indexOf(requireCall, pos0)
                const requirePath = this.getRequirePath(requireCall)
                // const newRequirePath = this.getNewRequirePath(requirePath, luaFiles)
                const newRequirePath = this.getNewRequirePathSimple(requirePath)
                const newRequireCall = this.getNewRequireCall(newRequirePath)
                // console.log('oldRequirePath', requirePath)
                // console.log('newRequirePath', newRequirePath)
                // console.log('newRequireCall', newRequireCall)
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

    moveCopiedFiles(luaScripts) {
        console.log("Перемещение скриптов")
        for (const [moduleOutDir, _] of Object.entries(luaScripts)) {
            const inputDir = Path.join(this.moduleInformant.outDir, moduleOutDir)

            if (!fs.existsSync(inputDir)) {
                continue
            }

            const outputDir = Path.join(
                this.moduleInformant.outDir,
                this.moduleInformant.modulesList.find(module => moduleOutDir.includes(module, 0))
            )
            if (Path.resolve(inputDir) === Path.resolve(outputDir)) {
                continue
            }
            let input = inputDir
            let output = outputDir
            input = input.replaceAll("\\", "/")
            output = output.replaceAll("\\", "/")
            input = `${input}/*`
            // console.log("inputDir", input)
            // console.log("outputDir", output)
            execSync(`mv ${input} ${output}`)
        }
    }

    async copy() {
        let inputFiles = []
        const luaFilesCopied = {}
        // const start = new Date().getTime()
        const luaScripts = await this.getLuaScripts(
            async (luaFiles, luaScriptsKey, module, [luaDir, luaOutDir]) => {
                luaScriptsKey = luaScriptsKey.replace("/", "\\")
                luaFilesCopied[luaScriptsKey] ??= []
                luaFiles = luaFiles.map(file => {
                    const path = file.substr(file.indexOf(luaScriptsKey), file.length)
                    let newLuaFile = Path.join(this.moduleInformant.outDir, path)
                    if (luaDir === luaOutDir && luaDir !== "./" && luaDir !== ".\\") {
                        newLuaFile = newLuaFile.replace(
                            luaScriptsKey,
                            // Path.join(this.moduleInformant.MODULES_DIR, module)
                            module
                        )
                    }
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
        await copyfiles([...inputFiles, this.moduleInformant.outDir])
        this.moveCopiedFiles(luaScripts)

        // console.log(Object.keys(luaScripts))
        // console.log(Object.keys(luaFilesCopied))
        // console.log(Object.values(luaFilesCopied))
        // console.log(Object.keys(luaScripts) === Object.keys(luaFilesCopied))
        // console.log(luaScripts)
        // console.log(luaFilesCopied)
        for (const [_, luaFiles] of Object.entries(luaFilesCopied)) {
            this.correctRequirePaths(luaFiles)
        }
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
