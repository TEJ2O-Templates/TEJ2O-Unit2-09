"""
Created by: Mr. Coxall
Created on: Sep 2020
This program shows an If Statement
"""

from microbit import *
import random


# variables
random_number = -1

random_number = -1
display.clear()
display.show(Image.HAPPY)

while True:
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 1)
        display.clear()

        # if random_number was 0
        if random_number == 0:
            display.scroll("Y")

        # if random_number was 1
        if random_number == 1:
            display.scroll("N")

        # pause and show you are ready again
        sleep(1000)
        display.show(Image.HAPPY)
