input.onButtonPressed(Button.A, function () {
    play = "rock"
})
input.onButtonPressed(Button.AB, function () {
    play = "scissors"
})
input.onButtonPressed(Button.B, function () {
    play = "paper"
})
let play = ""
radio.setGroup(2)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showNumber(0)
play = "ready"
basic.forever(function () {
    while (play == "ready") {
    	
    }
})
