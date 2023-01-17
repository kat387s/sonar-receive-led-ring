radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        A = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
        A.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedNumber == 2) {
        B = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
        B.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedNumber == 3) {
        C = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
        C.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (receivedNumber == 4) {
        RGB = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
        RGB.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        RGB.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        RGB.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
    }
})
let RGB: neopixel.Strip = null
let C: neopixel.Strip = null
let B: neopixel.Strip = null
let A: neopixel.Strip = null
radio.setGroup(5)
