input.onButtonPressed(Button.A, function () {
    // This is a speed of about 1sec./rotation
    pins.servoWritePin(AnalogPin.P0, 110)
})
input.onButtonPressed(Button.AB, function () {
    // This is a speed of about 1sec./rotation
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 65)
})
