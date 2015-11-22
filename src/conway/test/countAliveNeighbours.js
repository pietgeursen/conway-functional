var expect = require('expect.js')
var countAliveNeighbours = require('../countAliveNeighbours')
var createBoard = require('../conway').createBoard

describe('#countAliveNeighbours', function () {
  it('return 8 for a cell with all alive neighbours', function () {
    var board = createBoard(10)
    board[0][0] = true
    board[0][1] = true
    board[0][2] = true
    board[1][0] = true
    board[2][0] = true
    board[2][1] = true
    board[2][2] = true
    board[1][2] = true
    expect(countAliveNeighbours(1, 1, board)).to.be(8)
  })
  it('returns 3 for a corner cell with all alive neighbours', function () {
    var board = createBoard(10)
    board[0][1] = true
    board[1][1] = true
    board[1][0] = true
    expect(countAliveNeighbours(0, 0, board)).to.be(3)
  })
})
