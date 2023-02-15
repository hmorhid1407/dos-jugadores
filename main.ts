input.onButtonPressed(Button.A, function () {
    if (icono_escogido == 7) {
        if (marcado == 0) {
            puntos_a += 1
            marcado += 1
            if (puntos_a == 10) {
                music.playMelody("C D E A D F G B ", 400)
                music.playMelody("C D E A D F G A ", 400)
                music.playMelody("C D E A D F G C5 ", 400)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (icono_escogido == 7) {
        if (marcado == 0) {
            puntos_b += 1
        }
    }
})
function cambiar_emoji () {
    icono = randint(0, 9)
    emoji[icono].showImage(0)
    basic.pause(200)
}
let icono = 0
let puntos_b = 0
let puntos_a = 0
let marcado = 0
let icono_escogido = 0
let emoji: Image[] = []
music.playMelody("C D E A D F G B ", 400)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
emoji = [
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `),
images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `),
images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `),
images.createImage(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `),
images.createImage(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `),
images.createImage(`
    . . . . .
    . # . # .
    . # # # .
    . . # . .
    . . . . .
    `),
images.createImage(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `),
images.createImage(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . .
    `),
images.createImage(`
    . . # . .
    . . # . .
    # # # # #
    . # # # .
    . . # . .
    `),
images.createImage(`
    . . # . .
    . # # . .
    # # # # #
    . # # . .
    . . # . .
    `)
]
basic.forever(function () {
    cambiar_emoji()
})
