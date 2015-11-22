var indicesOutOfBounds = require('./indicesOutOfBounds')

function getNeighbours (r, c, board) {
  var neighbours = []
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      var _r = r + i
      var _c = c + j
      if ((i === 0 && j === 0) || indicesOutOfBounds(_r, _c, board)) {
        continue
      }
      neighbours.push(board[_r][_c])
    }
  }
  return neighbours
}
module.exports = getNeighbours
