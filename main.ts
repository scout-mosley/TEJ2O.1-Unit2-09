/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: oct 2025
 * This program plays rock paper scissor's 
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let randomNumber = randint(0, 2)

//when shake pick random number
input.onGesture(Gesture.Shake, function() {
    randomNumber

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // pasue and show you the output
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

//add 1 to score
input.onButtonPressed(Button.A, function () {

})