declare let InitGlobals: () => void

declare class Timer {
    getElapsed(): number
    getRemaining(): number
    getTimeout(): number
    destroy(): this
    pause(): this
    resume(): this
    start(timeout: number, periodic: boolean, handlerFunc: () => void): this
    static getExpired(): Timer
}