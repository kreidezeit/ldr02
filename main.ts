let LDR = 0
basic.forever(function () {
    LDR = pins.analogReadPin(AnalogPin.P0)
    if (LDR > 500) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
