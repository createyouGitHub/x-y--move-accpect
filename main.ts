radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        左右 = value
    } else if (name == "Y") {
        前后 = value
    } else if (name == "AD") {
        车臂 = value
    } else {
        机械臂 = 0
    }
    if (前后 > 300) {
        if (左右 > 1000) {
            pins.analogWritePin(AnalogPin.P12, 600)
            pins.analogWritePin(AnalogPin.P15, 1023)
        } else if (左右 < -1000) {
            pins.analogWritePin(AnalogPin.P12, 1023)
            pins.analogWritePin(AnalogPin.P15, 600)
        } else {
            pins.analogWritePin(AnalogPin.P12, 1023)
            pins.analogWritePin(AnalogPin.P15, 1023)
        }
    } else if (前后 < -300) {
        if (左右 > 1000) {
            pins.analogWritePin(AnalogPin.P13, 600)
            pins.analogWritePin(AnalogPin.P16, 1023)
        } else if (左右 < -1000) {
            pins.analogWritePin(AnalogPin.P13, 1023)
            pins.analogWritePin(AnalogPin.P16, 600)
        } else {
            pins.analogWritePin(AnalogPin.P13, 1023)
            pins.analogWritePin(AnalogPin.P16, 1023)
        }
    } else if (前后 < 300 && 前后 > -300) {
        if (左右 > 1000) {
            pins.analogWritePin(AnalogPin.P13, 1023)
            pins.analogWritePin(AnalogPin.P15, 1023)
        } else if (左右 < -1000) {
            pins.analogWritePin(AnalogPin.P12, 1023)
            pins.analogWritePin(AnalogPin.P16, 1023)
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        }
    }
    if (车臂 >= 300) {
        pins.servoWritePin(AnalogPin.P11, pins.map(
        车臂,
        -734,
        734,
        0,
        180
        ))
    } else if (车臂 <= -300) {
        pins.servoWritePin(AnalogPin.P10, pins.map(
        车臂,
        -734,
        734,
        0,
        180
        ))
    }
})
let 机械臂 = 0
let 车臂 = 0
let 前后 = 0
let 左右 = 0
basic.showIcon(IconNames.Silly)
radio.setGroup(255)
basic.forever(function () {
	
})
