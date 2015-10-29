var conway = require('./conway')

var board = conway.createBoard(10)

var stepGame = function(){
    conway.displayBoard(board)
    board = conway.nextBoard(board)
}

stepGame()
