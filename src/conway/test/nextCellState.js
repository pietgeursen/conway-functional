var expect = require('expect.js')
var nextCellState = require('../nextCellState')

describe('#nextCellState', function () {
  it('returns true if cell is alive and neighbour count is 2 or 3', function () {
    expect(nextCellState(true, 3)).to.be(true)
    expect(nextCellState(true, 2)).to.be(true)
  })
  it('should return false if cell is alive and overpopulated', function () {
    expect(nextCellState(true, 4)).to.be(false)
  })
  it('should return true id cell is dead and ressurectable', function () {
    expect(nextCellState(false, 3)).to.be(true)
  })
})
