/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: oct 2025
 * This program plays rock paper scissor's 
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)
game.setScore(0)

// When shake, pick a new random number each time
input.onGesture(Gesture.Shake, function () {
    let randomNumber = randint(0, 2)

    // if randomNumber was 0 → Rock
    if (randomNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            # . . . #
        `)
    }

    // if randomNumber was 1 → Paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2 → Scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pause and reset
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// add 1 to score with Button A
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
})

// shows score
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
    basic.showIcon(IconNames.Happy)
})
