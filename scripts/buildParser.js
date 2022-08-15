const fs = require("fs")
const Path = require("path")
const luaparse = require("luaparse")

class BuildFileNotFound extends Error {
    constructor(message) {
        super(message)
        this.name = "BuildFileNotFound"
    }
}

class BuildParser {
    BUILD_NAME = "build.lua"
    SRC_DIRECTORIES_TABLE_NAME = "ceres.layout.srcDirectories"

    constructor(path = "./") {
        const pathToBuild =
            Path.basename(path) === this.BUILD_NAME ? path : Path.join(path, this.BUILD_NAME)
        if (!fs.existsSync(pathToBuild)) {
            throw new BuildFileNotFound("Файл build.lua не найден")
        }
        const code = fs.readFileSync(pathToBuild, "utf-8")
        this.aboutCode = luaparse.parse(code)
        this.path = path
    }

    getList() {
        const codeElIndex = this.getTableCodeElementIndex()
        const codeEl = this.aboutCode.body[codeElIndex]
        if (!codeEl.init || codeEl.init[0].type !== "TableConstructorExpression") {
            return []
        }
        const fields = codeEl.init[0].fields
        const values = []
        for (const field of fields) {
            if (
                field.type !== "TableValue" ||
                !field.value ||
                field.value.type !== "StringLiteral" ||
                typeof field.value.raw !== "string"
            ) {
                continue
            }
            const raw = field.value.raw
            values.push(raw.substr(1, raw.length - 2))
        }
        return values
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
        const list = this.getList()
        console.log(list)
    }
}

// ;(() => {
//     try {
//         const buildParser = new BuildParser(__dirname)
//         buildParser.test()
//     } catch (e) {
//         if (e instanceof BuildFileNotFound) {
//             console.log(e.name)
//             return
//         }
//         console.error(e)
//     }
// })()

module.exports = {BuildParser, BuildFileNotFound}
