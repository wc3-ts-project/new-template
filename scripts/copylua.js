const util = require("util")
const copyfiles = util.promisify(require("copyfiles"))
const files = require("files")
const isAsyncFn = require("is-async-function")
const tsconfig = require("tsconfig")
const Path = require("path")

class CopyLua {
    TSCONFIG_NAME = "tsconfig.json"
    ENCODING = "utf-8"
    DEFAULT_OUT_DIR = "./"
    EXCEPT_PATHS = ["./src/ts", "main.ts"]

    constructor(exceptPaths = this.EXCEPT_PATHS) {
        this.exceptPaths = exceptPaths.map(path => Path.resolve(path))
        this.tsconfig = this.getTsconfig()
        this.modulesList = this.getModulesList()
        this.outDir = this.getOutdir()
    }

    getTsconfig() {
        return tsconfig.readFileSync(this.TSCONFIG_NAME)
    }

    getModulesList() {
        const srcPaths = this.tsconfig.include
        if (!srcPaths || srcPaths.length === 0) {
            return []
        }
        return srcPaths.filter(path => !this.exceptPaths.includes(Path.resolve(path)))
    }

    getOutdir() {
        return this.tsconfig.compilerOptions.outDir || this.DEFAULT_OUT_DIR
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

    async getLuaScripts(filesFn) {
        const luaScripts = {}
        for (const module of this.modulesList) {
            luaScripts[module] = await this.recursiveLs(module, async fsx => {
                let luaFiles = fsx.filter(file => /\.lua$/.test(file))
                if (typeof filesFn === "function") {
                    luaFiles = isAsyncFn(filesFn)
                        ? await filesFn(luaFiles, module)
                        : filesFn(luaFiles, module)
                }
                return luaFiles
            })
        }
        return luaScripts
    }

    async copy() {
        let inputFiles = []
        await this.getLuaScripts(async (luaFiles, module) => {
            module = module.replace("/", "\\")
            luaFiles = luaFiles.map(file => file.substr(file.indexOf(module), file.length))
            inputFiles = [...inputFiles, ...luaFiles]
            return luaFiles
        })
        await copyfiles([...inputFiles, this.outDir])
    }
}

;(async () => {
    // copyfiles(["scripts/dev.ts", "dev2.ts"], err => {
    //     if (err) {
    //         console.error(err)
    //     }
    // })
    // copyfiles(["scripts/*", "dev2.ts"], err => {
    //     if (err) {
    //         throw new Error(err)
    //     }
    // })
    // await copyfiles(["scripts/dev.ts", "dev2.ts"])
    // await copyfiles(["scripts/*", "dev2.ts"])
    // console.log("Файлы скопированы")

    // console.log()

    const copyLua = new CopyLua()
    await copyLua.copy()
    // console.log(await copyLua.recursiveLs('node_modules/cerrie'))
    // console.log(await copyLua.getLuaScripts())
    // const luaScripts = await copyLua.recursiveLs("node_modules/cerrie", fsx =>
    //     fsx.filter(file => /\.lua$/.test(file))
    // )
    // console.log(luaScripts)
    // const luaPaths = await files
    //     .list("node_modules/cerrie")
    //     .filter(file => /\.lua$/.test(file))
    //     .map(files.abs)
    // const paths = await files.list("node_modules/cerrie").filter(async file => {
    //     return await files.stat(file).isDirectory()
    // })
    // console.log(paths)
})()

module.exports = CopyLua
