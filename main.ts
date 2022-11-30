radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        左右 = value
    } else {
        前后 = value
    }
    if (左右 < 300 && 左右 > -300 && 前后 > 300) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P3, 0)
        radio.sendNumber(8)
    } else if (左右 < 300 && 左右 > -300 && 前后 < 300) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 1023)
        radio.sendNumber(2)
    } else if (前后 < 300 && 前后 > -300 && 左右 < -300) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P3, 0)
        radio.sendNumber(4)
    } else if (左右 < 300 && 左右 > -300 && 前后 > 300) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 1023)
        radio.sendNumber(6)
    } else if (左右 > 300 && 前后 > 300) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 500)
        pins.analogWritePin(AnalogPin.P3, 0)
        radio.sendNumber(9)
    } else if (左右 < -300 && 前后 > 300) {
        pins.analogWritePin(AnalogPin.P0, 500)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P3, 0)
        radio.sendNumber(7)
    } else if (左右 > 300 && 前后 < -300) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 500)
        radio.sendNumber(3)
    } else if (左右 < -300 && 前后 < -300) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 1023)
        radio.sendNumber(1)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
        basic.showIcon(IconNames.Silly)
        radio.sendNumber(5)
    }
})
let 前后 = 0
let 左右 = 0
basic.showIcon(IconNames.Silly)
radio.setGroup(1)
basic.forever(function () {
	
})
