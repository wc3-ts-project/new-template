const fs = require("fs")
const Path = require("path")
const replaceAll = require("string.prototype.replaceall")

class LuaPreprocessor {
    literal_regexp = /["|'].*["|']/gm
    require_literal_regexp = /(?<=require[\s\(])[\"\'].*[\"\']/gm
    non_require_literal_regexp = /(?<!require[\s\(])[\"\'].*[\"\']/gm
    multiline_non_require_literal_regexp = /(?<!require[\s\(]]|--)\[=*\[.*\]=*\]/gm

    constructor(content) {
        this.content = content
        // this.stringLiterals = this.content.match(this.literal_regexp) || []
        // this.requireStringLiterals = this.content.match(this.require_literal_regexp) || []
    }

    getStringLiterals() {
        return this.content.match(this.literal_regexp) || []
    }

    getNonRequireStringLiterals() {
        return this.content.match(this.non_require_literal_regexp) || []
    }

    getMultiLineNonRequireStringLiterals() {
        return this.content.match(this.multiline_non_require_literal_regexp) || []
    }

    getRequireStringLiterals() {
        return this.content.match(this.require_literal_regexp) || []
    }

    getMethodCalls() {
        const firstEntryExp = /[\w-]+\s*:\s*[\w_]+\s*\(.*\)/gs
    }

    replaceEntries(entriesFunc, newEntryFunc) {
        const entries = entriesFunc()
        let pos0 = 0
        let newContent = this.content
        for (const entry of entries) {
            const pos = newContent.indexOf(entry, pos0)
            const newEntry = newEntryFunc(entry, newContent, pos, pos0)
            const oldPos = pos + entry.length
            newContent = newContent.substring(0, pos) + newEntry + newContent.substring(oldPos)
            const newPos = pos + newEntry.length
            pos0 = newPos
        }
        return new LuaPreprocessor(newContent)
    }

    inMatch(entry, otherEntries, content, pos, pos0) {
        return otherEntries.find(otherEntry => {
            const otherEntryPos = content.indexOf(otherEntry, pos0)
            if (otherEntryPos === -1) {
                otherEntries = otherEntries.filter(someOtherEntry => someOtherEntry !== otherEntry)
            }
            return (
                otherEntry.includes(entry) &&
                pos > otherEntryPos &&
                pos < otherEntryPos + otherEntry.length
            )
        })
    }

    // withoutStrings(saveRequire = true) {
    //     const exp = saveRequire ? this.literal_regexp_with_saved_require : this.literal_regexp
    //     return new ParseLua(this.content.replaceAll(exp, '""'))
    // }

    // withoutComments() {}
}

if (typeof require !== "undefined" && require.main === module) {
    const luaPreprocessor = new LuaPreprocessor(
        fs.readFileSync(Path.join(__dirname, "init.lua"), "utf-8")
    )
    // const requireStringLiterals = luaPreprocessor.getRequireStringLiterals()
    let stringLiterals = [
        ...luaPreprocessor.getNonRequireStringLiterals(),
        ...luaPreprocessor.getMultiLineNonRequireStringLiterals()
    ]
    // console.log(nonRequireStringLiterals)
    // return
    const entries = luaPreprocessor.content.match(/require\s*\(?\s*[\"\'][\w\.-]*[\"\']\s*\)?/gm)
    const result = luaPreprocessor.replaceEntries(
        () => entries,
        (entry, newContent, pos, pos0) => {
            const inLiteral = luaPreprocessor.inMatch(entry, stringLiterals, newContent, pos, pos0)
            if (inLiteral) {
                return entry
            }
            const s = entry.match(luaPreprocessor.literal_regexp)[0]
            const newEntry = `node_modules.${s.substr(1, s.length - 2)}`
            return `require("${newEntry}")`
        }
    )
    // // console.log(parseLua.withoutStrings().content)
    fs.writeFileSync(Path.join(__dirname, "result.lua"), result.content)
}

module.exports = LuaPreprocessor
