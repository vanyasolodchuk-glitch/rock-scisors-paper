function playerWin2 () {
    basic.showString("Player Wins!")
}
function botPaper2 () {
    botPaper = 1
}
function playerPaper2 () {
    playerPaper = 1
}
input.onButtonPressed(Button.A, function () {
    playerRock2()
})
function botScisors2 () {
    botScisors = 1
}
function functionTie () {
    basic.showString("Tie!")
}
function botWin2 () {
    basic.showString("Bot Wins!")
}
function playerRock2 () {
    playerRock = 1
}
input.onButtonPressed(Button.AB, function () {
    playerScisors2()
})
input.onButtonPressed(Button.B, function () {
    playerPaper2()
})
function playerScisors2 () {
    playerScisors = 1
}
function botRock2 () {
    botRock = 1
}
let botWin = 0
let playerWin = 0
let botRock = 0
let playerScisors = 0
let playerRock = 0
let botScisors = 0
let playerPaper = 0
let botPaper = 0
let botNumber = randint(1, 3)
basic.forever(function () {
    if (botNumber == 1) {
        botRock2()
    }
    if (botNumber == 2) {
        botPaper2()
    }
    if (botNumber == 3) {
        botScisors2()
    }
})
basic.forever(function () {
    if (botPaper == 1 && playerScisors == 1) {
        playerWin = 1
    }
})
basic.forever(function () {
    if (botScisors == 1 && playerPaper == 1) {
        botWin = 1
    }
})
basic.forever(function () {
    if (botScisors == 1 && playerRock == 1) {
        playerWin = 1
    }
})
basic.forever(function () {
    if (botRock == 1 && playerScisors == 1) {
        botWin = 1
    }
})
basic.forever(function () {
    if (botRock == 1 && playerPaper == 1) {
        playerWin = 1
    }
})
basic.forever(function () {
    if (botPaper == 1 && playerRock == 1) {
        botWin = 1
    }
})
basic.forever(function () {
    if (botRock == 1 && playerRock == 1 || botPaper == 1 && playerPaper == 1 || botScisors == 1 && playerScisors == 1) {
        functionTie()
    }
})
basic.forever(function () {
    if (playerWin == 1) {
        playerWin2()
    }
})
basic.forever(function () {
    if (botWin == 1) {
        botWin2()
    }
})
