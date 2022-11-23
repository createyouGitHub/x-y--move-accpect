radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        左右 = value
    }
    if (name == "Y") {
        前后 = value
    }
    if (左右 == 0 && 前后 == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        radio.sendNumber(5)
    } else if (左右 == 0 && 前后 > 0) {
        pins.digitalWritePin(DigitalPin.P0, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P3, 0)
        radio.sendNumber(8)
    } else if (左右 == 0 && 前后 < 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, Math.abs(前后))
        radio.sendNumber(2)
    } else if (左右 > 0 && 前后 == 0) {
        pins.digitalWritePin(DigitalPin.P0, Math.abs(左右))
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, Math.abs(左右))
        radio.sendNumber(6)
    } else if (左右 < 0 && 前后 == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, Math.abs(左右))
        pins.digitalWritePin(DigitalPin.P2, Math.abs(左右))
        pins.digitalWritePin(DigitalPin.P3, 0)
        radio.sendNumber(4)
    } else if (左右 > 0 && 前后 > 0) {
        pins.digitalWritePin(DigitalPin.P0, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, Math.abs(前后) / 2)
        pins.digitalWritePin(DigitalPin.P3, 0)
        radio.sendNumber(9)
    } else if (左右 < 0 && 前后 > 0) {
        pins.digitalWritePin(DigitalPin.P0, Math.abs(前后) / 2)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P3, 0)
        radio.sendNumber(7)
    } else if (左右 > 0 && 前后 < 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, Math.abs(前后))
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, Math.abs(前后) / 2)
        radio.sendNumber(3)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, Math.abs(前后) / 2)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, Math.abs(前后))
        radio.sendNumber(1)
    }
})
let 前后 = 0
let 左右 = 0
basic.showIcon(IconNames.Silly)
radio.setGroup(1)
