const util = require("util")
const copyfiles = util.promisify(require("copyfiles"))
const files = require("files")
const isAsyncFn = require("is-async-function")
const tsconfig = require("tsconfig")
const Path = require("path")

class ModuleInformant {
    TSCONFIG_NAME = "tsconfig.json"
    PACKAGE_NPM_NAME = "package.json"
    MODULES_DIR = "node_modules"
    ENCODING = "utf-8"
    DEFAULT_START_PATH = "./"
    DEFAULT_EXCLUDED_MODULES = []
    DEFAULT_OUT_DIR = "./"

    constructor(
        pathToPackage = this.DEFAULT_START_PATH,
        excludedModules = this.DEFAULT_EXCLUDED_MODULES
    ) {
        this.pathToPackage = pathToPackage
        this.excludedModules = excludedModules
        this.tsconfig = this.getTsconfig(pathToPackage)
        this.modulesList = this.getModulesList(pathToPackage)
        this.outDir = this.getOutdir()
    }

    getPath(path, name) {
        return Path.basename(path) === name ? path : Path.join(path, name)
    }

    getTsconfig(path = this.DEFAULT_START_PATH) {
        return tsconfig.readFileSync(this.getPath(path, this.TSCONFIG_NAME))
    }

    getPackageNpm(path = this.DEFAULT_START_PATH) {
        return tsconfig.readFileSync(this.getPath(path, this.PACKAGE_NPM_NAME))
    }

    getModulesList(path = this.DEFAULT_START_PATH) {
        const pkg = this.getPackageNpm(path)
        const dependencies = pkg.dependencies
        if (!dependencies || Object.keys(dependencies).length === 0) {
            return []
        }
        const filtered = Object.keys(dependencies)
            .filter(pkgName => !this.excludedModules.includes(pkgName))
            .map(pkgName => Path.join(this.MODULES_DIR, pkgName))
        const nestedPkgs = []
        for (const pkgName of filtered) {
            const pkgs = this.getModulesList(pkgName).filter(pkgName => !filtered.includes(pkgName))
            for (const pkg of pkgs) {
                nestedPkgs.push(pkg)
            }
        }
        return [...filtered, ...nestedPkgs]
    }

    getOutdir() {
        return this.tsconfig.compilerOptions.outDir || this.DEFAULT_OUT_DIR
    }

    getInputLuaFiles() {

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

    async test() {
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

        const moduleInformat = new ModuleInformant()
        console.log(moduleInformat.modulesList)
        // await ModuleInformant.copy()

        // console.log(await ModuleInformant.recursiveLs('node_modules/cerrie'))
        // console.log(await ModuleInformant.getLuaScripts())
        // const luaScripts = await ModuleInformant.recursiveLs("node_modules/cerrie", fsx =>
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
    }
}

module.exports = ModuleInformant
