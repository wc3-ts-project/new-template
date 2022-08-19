const tsconfig = require("tsconfig")
const Path = require("path")
const fs = require("fs")

class TsconfigFileNotFound extends Error {
    constructor(message) {
        super(message)
        this.name = "TsconfigFileNotFound"
    }
}

class NpmPackageFileNotFound extends Error {
    constructor(message) {
        super(message)
        this.name = "NpmPackageFileNotFound"
    }
}

class ModuleInformant {
    TSCONFIG_NAME = "tsconfig.json"
    PACKAGE_NPM_NAME = "package.json"
    MODULES_DIR = "node_modules"
    ENCODING = "utf-8"
    DEFAULT_START_PATH = "./"
    DEFAULT_EXCLUDED_MODULES = []
    DEFAULT_OUT_DIR = "./"
    DEFAULT_ROOT_DIR = './'

    constructor(
        pathToPackage = this.DEFAULT_START_PATH,
        excludedModules = this.DEFAULT_EXCLUDED_MODULES
    ) {
        this.pathToPackage = pathToPackage
        this.excludedModules = excludedModules
        this.tsconfig = this.getTsconfig(pathToPackage)
        this.modulesList = this.getModulesList(pathToPackage)
        this.outDir = this.getOutdir()
        this.rootDir = this.getRootDir()
    }

    getPath(path, name) {
        return Path.basename(path) === name ? path : Path.join(path, name)
    }

    getTsconfig(path = this.DEFAULT_START_PATH) {
        const pathToTsconfig = this.getPath(path, this.TSCONFIG_NAME)
        if (!fs.existsSync(pathToTsconfig)) {
            throw new TsconfigFileNotFound(`Файл ${this.TSCONFIG_NAME} не найден`)
        }
        return tsconfig.readFileSync(pathToTsconfig)
    }

    getPackageNpm(path = this.DEFAULT_START_PATH) {
        const pathToPackage = this.getPath(path, this.PACKAGE_NPM_NAME)
        if (!fs.existsSync(pathToPackage)) {
            throw new NpmPackageFileNotFound(`Файл ${this.PACKAGE_NPM_NAME} не найден`)
        }
        return tsconfig.readFileSync(pathToPackage)
    }

    getModulesList(path = this.DEFAULT_START_PATH) {
        const pkg = this.getPackageNpm(path)
        const dependencies = pkg.dependencies
        if (!dependencies || Object.keys(dependencies).length === 0) {
            return []
        }
        const allPkgs = new Set()
        const filtered = Object.keys(dependencies)
            .filter(pkgName => !this.excludedModules.includes(pkgName))
            .map(pkgName => {
                const path = Path.join(this.MODULES_DIR, pkgName)
                allPkgs.add(path)
                return path
            })
        // console.log(filtered)
        // const nestedPkgs = []
        for (const pkgName of filtered) {
            const pkgs = this.getModulesList(pkgName)
            // const pkgs = this.getModulesList(pkgName).filter(pkgName => {
            //     console.log(pkgName)
            //     console.log(!filtered.includes(pkgName))
            //     console.log()
            //     return !filtered.includes(pkgName)
            // })
            for (const pkg of pkgs) {
                // nestedPkgs.push(pkg)
                allPkgs.add(pkg)
            }
        }
        // return [...filtered, ...nestedPkgs]
        return Array.from(allPkgs)
    }

    getOutdir() {
        return this.tsconfig.compilerOptions.outDir || this.DEFAULT_OUT_DIR
    }

    getRootDir() {
        return this.tsconfig.compilerOptions.rootDir || this.DEFAULT_ROOT_DIR
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

// (async () => {
//     await test()
// })()

module.exports = { ModuleInformant, TsconfigFileNotFound, NpmPackageFileNotFound }
