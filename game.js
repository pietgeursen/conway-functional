var conway = require('./conway')

var board = conway.createBoard(10)

board[1][1] = true
board[1][2] = true
board[2][1] = true
board[2][2] = true

var stepGame = function(){
    conway.displayBoard(board)
    board = conway.nextBoard(board)
}

setInterval(stepGame, 300)
