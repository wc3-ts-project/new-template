const util = require("util")
const replaceAll = require("string.prototype.replaceall")
const copyfiles = util.promisify(require("copyfiles"))
const files = require("files")
const isAsyncFn = require("is-async-function")
const Path = require("path")
const fs = require("fs")
const { BuildParser, BuildFileNotFound } = require("./buildParser")
const { ModuleInformant, TsconfigFileNotFound } = require("./moduleInformant")

class CopyLua {
    DEFAULT_INPUT_LUA_DIRS = ["./"]
    DEFAULT_PATH = process.cwd()
    moduleInformant = new ModuleInformant(this.DEFAULT_PATH)

    getInputLuaDirs(path = this.DEFAULT_PATH) {
        let buildNotFound = false
        let tsconfigNotFound = false
        let list = []
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
        return list
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
            const luaDirs = this.getInputLuaDirs(module)
            // console.log("Папки модуля", module, ":", luaDirs)
            for (const luaDir of luaDirs) {
                const luaScriptsKey = Path.join(module, luaDir)
                luaScripts[luaScriptsKey] = await this.recursiveLs(luaScriptsKey, async fsx => {
                    const predicate = file => {
                        const isLua = /\.lua$/.test(file)
                        let notModules = !/node_modules/.test(file)
                        if (Path.resolve(luaDir) === Path.resolve(this.moduleInformant.outDir)) {
                            return isLua && notModules
                        }
                        return isLua
                    }
                    let luaFiles = fsx.filter(predicate)
                    if (typeof filesFn === "function") {
                        luaFiles = isAsyncFn(filesFn)
                            ? await filesFn(luaFiles, luaScriptsKey)
                            : filesFn(luaFiles, luaScriptsKey)
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

    async copy() {
        let inputFiles = []
        const luaFilesCopied = {}
        // const start = new Date().getTime()
        const luaScripts = await this.getLuaScripts(async (luaFiles, module) => {
            module = module.replace("/", "\\")
            luaFilesCopied[module] ??= []
            luaFiles = luaFiles.map(file => {
                const path = file.substr(file.indexOf(module), file.length)
                const newLuaFile = Path.join(this.moduleInformant.outDir, path)
                if (!luaFilesCopied[module].includes(newLuaFile)) {
                    luaFilesCopied[module].push(newLuaFile)
                }
                return path
            })
            // console.log(luaFiles)
            inputFiles = [...inputFiles, ...luaFiles]
            return luaFiles
        })
        await copyfiles([...inputFiles, this.moduleInformant.outDir])
        // console.log(Object.keys(luaScripts))
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
