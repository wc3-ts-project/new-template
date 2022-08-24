/// <reference path="./handle.d.ts"/>

declare abstract class Handle {
    to<T extends typeof Handle>(cls: T): Handle
    static from<T extends Handle>(obj: T): Handle
}

declare abstract class Widget extends Handle {
    pause(): this
    to<T extends typeof Handle>(cls: T): Widget
    static from<T extends Handle>(obj: T): Widget
}

declare class Timer extends Widget {
    getElapsed(): number
    getRemaining(): number
    getTimeout(): number
    destroy(): this
    pause(): this
    resume(): this
    start(timeout: number, periodic: boolean, handlerFunc: () => void): this
    static getExpired(): Timer
}