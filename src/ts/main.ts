// import "cerrie/init"
// import "cerrie/livereload"
import { a } from "new_package/index"

print(a)
print("Hello TypeScriptToLua!")

// TimerStart(CreateTimer(), 0., false, () => {
//     EnumItemsInRect(bj_mapInitialPlayableArea, null, () => {
//         print(GetItemName(GetEnumItem()))
//     })
//     DestroyTimer(GetExpiredTimer())
// })

// const cameraSetup = CameraSetup.create()
// CameraSetup.apply(cameraSetup, false, false).applyForceDuration(cameraSetup, true, 1.0)

const timer = new Timer()
// // const w = Widget.from(timer)
const w = timer.to(Widget)

// function withSomeHandle(o: Timer | Widget) {
//     if (o instanceof Timer) {
//         o.pause()
//     }
// }

timer.start(1, false, () => {
    print(`
        Hello
        Main
    `)
    const timer = Timer.getExpired()
    timer.destroy()
})

// const timer = CreateTimer()
// TimerStart(timer, 1., false, () => {
//     print("Hello")
// })
// DestroyTimer(timer)
