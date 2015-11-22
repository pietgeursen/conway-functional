var expect = require('expect.js')
var getNeighbours = require('../getNeighbours')
var createBoard = require('../conway.js').createBoard

describe('#getNeighbours', function () {
  it('should return 8 neigbours', function () {
    var board = createBoard(10)
    expect(getNeighbours(2, 2, board).length).to.be(8)
  })
  it('should return 3 neigbours for a corner cell', function () {
    var board = createBoard(10)
    expect(getNeighbours(0, 0, board).length).to.be(3)
  })
})
