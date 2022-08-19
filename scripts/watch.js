const TscWatchClient = require("tsc-watch/client")
const watch = new TscWatchClient()
const { exec } = require("child_process")

watch.on("success", () => {
    exec("node scripts/copyLua.js")
})

// watch.start("--compiler", "ceres-tstl", "--project", ".")
watch.start("--compiler", "typescript-to-lua/dist/tstl", "--project", ".")
