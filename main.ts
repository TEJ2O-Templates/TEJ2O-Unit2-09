/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows an If Statement.
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 1)
  basic.clearScreen()

  // if randomNumber was 0
  if (randomNumber == 0) {
    basic.showString("Y")
  }

  // if randomNumber was 1
  if (randomNumber == 1) {
    basic.showString("N")
  }

  // pasue and show you are ready again
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
})
