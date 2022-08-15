const util = require("util")
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
            return this.DEFAULT_INPUT_LUA_DIRS
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
        const luaScripts = {}
        for (const module of this.moduleInformant.modulesList) {
            const luaDirs = this.getInputLuaDirs(module)
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

    getScriptRequireCalls(luaFileContent) {
        const calls = luaFileContent.match(/require\s*\(?\s*[\"\'][\w\.]*[\"\']\s*\)?/gm)
        return calls.map((call, i) => [call, luaFileContent.indexOf(call, i)])
    }

    getRequirePaths(requireCalls) {
        return requireCalls.map(val => val[0].split(/(\"|\')/)[2])
    }

    getNewRequirePaths(requirePaths) {
        
    }

    correctRequirePaths(luaScripts) {
        const luaFiles = this.expandPaths(luaScripts)
        for (const luaFile of luaFiles) {
            const content = fs.readFileSync(luaFile, "utf-8")
            const requireCalls = this.getScriptRequirePaths(content)
            const requirePaths = this.getRequirePaths(requireCalls)
            console.log(requireCalls)
        }
    }

    async copy() {
        let inputFiles = []
        const luaScripts = await this.getLuaScripts(async (luaFiles, module) => {
            module = module.replace("/", "\\")
            luaFiles = luaFiles.map(file => file.substr(file.indexOf(module), file.length))
            inputFiles = [...inputFiles, ...luaFiles]
            return luaFiles
        })
        for (const luaFiles of luaScripts) {
            this.correctRequirePaths(luaFiles)
        }
        await copyfiles([...inputFiles, this.moduleInformant.outDir])
    }

    async test() {
        // const dir = await this.recursiveLs(__dirname)
        // console.log(this.expandPaths(dir))
        // console.log(this.getInputLuaDirs())
        // console.log(await this.getLuaScripts())
        const content = fs.readFileSync(Path.join(__dirname, "init.lua"), "utf-8")
        const requireCalls = this.getScriptRequireCalls(content)
        console.log(requireCalls)
        console.log(this.getRequirePaths(requireCalls))
        // await this.copy()
        // const luaScripts = await this.getLuaScripts()
    }
}

;(async () => {
    const copyLua = new CopyLua()
    await copyLua.test()
})()

module.exports = CopyLua
