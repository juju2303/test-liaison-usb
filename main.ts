basic.pause(1000)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
}
basic.forever(function () {
    serial.writeLine("température")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    serial.writeLine("Intensité lumineuse")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    serial.writeLine("niveau sonore")
    serial.writeNumber(input.soundLevel())
    serial.writeLine("")
})
