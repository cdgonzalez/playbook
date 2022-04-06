/*
    Este módulo se comporta como si fuera un objeto que contiene todo lo definido

    [Module: null prototype] {
        DEFAULT_LEVEL: 'info',
        LEVELS: { error: 0, debud: 1, warn: 2, data: 3, info: 4. verbose: 5 },
        Logger: [class Logger],
        log: [Function: log]
    }

*/

// exports a function
export function log (message) {
    console.log(message)
}

// exports a constant
export const DEFAULT_LEVEL = 'info'

// exports a object
export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
}

// export a class
export class Logger {
    constructor (name) {
        this.name = name
    }

    log (message) {
        console.log(`[${this.name}] ${message}`)
    }
}