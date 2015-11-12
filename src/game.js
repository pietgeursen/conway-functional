var conway = require('./conway.js')
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

function step() {
  conway.store.dispatch({type: 'STEP'})
}

setInterval(step, 200)
