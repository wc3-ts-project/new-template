const { execSync } = require('child_process')

function someFunction(){
    //Ждём несколько секунд
    // console.log("Waiting...")
    execSync("ceres build -- --map map.w3x --output mpq")
}

const n = 60
const times = []
for (let i = 0; i < n; i++) {
    const start= new Date().getTime()
    someFunction()
    const end = new Date().getTime()
    const t = end - start
    console.log(`Measure: ${t}ms`)
    times.push(t)
}
console.log(`Avg: ${times.reduce((acc, v) => acc + v, 0) / times.length}ms`)