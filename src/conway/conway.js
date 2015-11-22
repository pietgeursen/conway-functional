var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')

function createBoard (size) {
  var board = new Array(size)
  for (var i = 0; i < size; i++) {
    board[i] = new Array(size)
  }
  return board
}
function nextBoard (currentBoard) {
  var nextBoard = createBoard(currentBoard.length)
  for (var i = 0; i < currentBoard.length; i++) {
    for (var j = 0; j < currentBoard.length; j++) {
      var cell = currentBoard[i][j]
      var neighbourCount = countAliveNeighbours(i, j, currentBoard)
      nextBoard[i][j] = nextCellState(cell, neighbourCount)
    }
  }
  return nextBoard
}

exports.createBoard = createBoard
exports.nextBoard = nextBoard
