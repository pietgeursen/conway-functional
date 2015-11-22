var expect = require('expect.js')
var conway = require('../conway.js')

describe('#createBoard', function () {
  it('should create a 2d array of the given dimensions', function () {
    var board = conway.createBoard(10)
    expect(board.length).to.be(10)
    expect(board[9].length).to.be(10)
  })
})
describe('#nextBoard', function () {
  describe('should make valid new boards with example boards', function () {
    var board
    beforeEach(function () {
      board = conway.createBoard(10)
    })

    it('Example 1', function () {
      board[0][0] = true
      var newBoard = conway.nextBoard(board)
      expect(newBoard[0][0]).to.be(false)
    })
    it('Example 2', function () {
      board[1][1] = true
      board[1][2] = true
      board[2][1] = true
      board[2][2] = true
      var newBoard = conway.nextBoard(board)
      expect(newBoard[2][2]).to.be(true)
      expect(newBoard[1][1]).to.be(true)
      expect(newBoard[2][1]).to.be(true)
      expect(newBoard[1][2]).to.be(true)
    })
    it('Example 3', function () {
      board[0][0] = true
      board[0][1] = true
      board[1][0] = true
      var newBoard = conway.nextBoard(board)
      expect(newBoard[1][1]).to.be(true)
    })
  })
})
