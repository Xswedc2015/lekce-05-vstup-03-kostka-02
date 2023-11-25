input.onButtonPressed(Button.A, function () {
    stav = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
    stav = randint(1, 6)
})
let stav = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
stav = randint(1, 6)
basic.forever(function () {
    if (stav == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (stav == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (stav == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (stav == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (stav == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
