const fs = require("fs")
const Path = require("path")
const luaparse = require("luaparse")

class BuildParser {
    BUILD_NAME = "build.lua"
    SRC_DIRECTORIES_TABLE_NAME = "ceres.layout.srcDirectories"

    constructor(path = "./") {
        const code = fs.readFileSync(Path.join(path, this.BUILD_NAME), "utf-8")
        this.aboutCode = luaparse.parse(code)
        this.path = path
    }

    getList() {
        const codeEl = this.getTableCodeElementIndex()
        console.log(codeEl)
    }

    getTableCodeElementIndex() {
        for (let index = 0; index < this.aboutCode.body.length; index++) {
            const codeEl = this.aboutCode.body[index]
            if (codeEl.type !== "AssignmentStatement") {
                continue
            }
            const variableData = codeEl.variables[0]
            const getName = (data, acc = "") => {
                if (data.type === "Identifier" && !data.base) {
                    return !data.name ? acc : data.name + acc
                }
                if (
                    data.type !== "MemberExpression" ||
                    typeof data.indexer !== "string" ||
                    !data.identifier ||
                    data.identifier.type !== "Identifier" ||
                    !data.identifier.name
                ) {
                    return acc
                }
                return getName(data.base, data.indexer + data.identifier.name + acc)
            }
            const varName = getName(variableData)
            if (varName === this.SRC_DIRECTORIES_TABLE_NAME) {
                return index
            }
        }
        throw new Error("Не удалось найти индекс элемента путей исходников")
    }

    test() {
        // console.log(this.aboutCode)
        this.getList()
    }
}

;(() => {
    const buildParser = new BuildParser()
    buildParser.test()
})()

module.exports = BuildParser
