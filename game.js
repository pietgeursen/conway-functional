var conway = require('./conway')

var board = conway.createBoard(15)
//Block
board[1][1] = true
board[1][2] = true
board[2][1] = true
board[2][2] = true
//blinker
board[5][3] = true
board[5][4] = true
board[5][5] = true

var stepGame = function(){
    conway.displayBoard(board)
    board = conway.nextBoard(board)
}

setInterval(stepGame, 200)
