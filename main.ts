input.onButtonPressed(Button.A, function () {
    led.unplot(varX, varY)
    varX = 0
    varY = 0
    led.plot(varX, varY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(varX, varY)
    varX = 0
    varY += 1
    if (varY > 4) {
        varY = 0
    }
    led.plot(varX, varY)
})
let varY = 0
let varX = 0
varX = 0
varY = 0
basic.forever(function () {
    led.plot(varX, varY)
    basic.pause(500)
    while (varX <= 4) {
        basic.pause(500)
        led.unplot(varX, varY)
        varX += 1
        led.plot(varX, varY)
    }
    while (varX >= 0) {
        basic.pause(500)
        led.unplot(varX, varY)
        varX += -1
        led.plot(varX, varY)
    }
})
