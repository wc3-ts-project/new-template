const fs = require("fs")
const Path = require("path")
const replaceAll = require("string.prototype.replaceall")

class LuaPreprocessor {
    literal_regexp = /["|'].*["|']/gm
    require_literal_regexp = /(?<=require[\s\(])[\"\'].*[\"\']/gm

    constructor(content) {
        this.content = content
        this.stringLiterals = this.content.match(this.literal_regexp) || []
        this.requireStringLiterals = this.content.match(this.require_literal_regexp) || []
    }

    replaceEntries(entriesFunc, newEntryFunc) {
        const entries = entriesFunc()
        let pos0 = 0
        let newContent = this.content
        for (const entry of entries) {
            const pos = newContent.indexOf(entry, pos0)
            const newEntry = newEntryFunc(entry)
            const oldPos = pos + entry.length
            newContent = newContent.substring(0, pos) + newEntry + newContent.substring(oldPos)
            const newPos = pos + newEntry.length
            pos0 = newPos
        }
        return new LuaPreprocessor(newContent)
    }

    // withoutStrings(saveRequire = true) {
    //     const exp = saveRequire ? this.literal_regexp_with_saved_require : this.literal_regexp
    //     return new ParseLua(this.content.replaceAll(exp, '""'))
    // }

    // withoutComments() {}
}

;(() => {
    const luaPreprocessor = new LuaPreprocessor(
        fs.readFileSync(Path.join(__dirname, "file.lua"), "utf-8")
    )
    // console.log(luaPreprocessor.stringLiterals)
    // return
    const result = luaPreprocessor.replaceEntries(
        () => luaPreprocessor.requireStringLiterals,
        entry => {
            if (luaPreprocessor.stringLiterals.find(literal => literal.includes(entry))) {
                return entry
            }
            return 'require("node_modules.' + entry.match(luaPreprocessor.literal_regexp)[0] + '")'
        }
    )
    // console.log(parseLua.withoutStrings().content)
    fs.writeFileSync(Path.join(__dirname, "result.lua"), result.content)
})()

module.exports = LuaPreprocessor
