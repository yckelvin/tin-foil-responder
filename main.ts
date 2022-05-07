input.onPinPressed(TouchPin.P0, function () {
    Winner = 1
    showID()
})
function showID () {
    if (!(onHold)) {
        onHold = 1
        basic.showNumber(Winner)
        basic.pause(3000)
        basic.clearScreen()
        onHold = 0
    }
}
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onPinPressed(TouchPin.P2, function () {
    Winner = 3
    showID()
})
input.onPinPressed(TouchPin.P1, function () {
    Winner = 2
    showID()
})
let Winner = 0
let onHold = 0
onHold = 0
