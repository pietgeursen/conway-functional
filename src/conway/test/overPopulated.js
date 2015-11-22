var expect = require('expect.js')
var overPopulated = require('../overPopulated')

describe('#overPopulated', function () {
  it('should return true with cell count > 3', function () {
    expect(overPopulated(4)).to.be(true)
  })
  it('should return false with cell count < 4', function () {
    expect(overPopulated(3)).to.be(false)
  })
})
