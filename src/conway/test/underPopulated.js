var expect = require('expect.js')
var underPopulated = require('../underPopulated')

describe('#underPopulated', function () {
  it('should return true with cell count < 2', function () {
    expect(underPopulated(1)).to.be(true)
  })
  it('should return false with cell count < 3', function () {
    expect(underPopulated(2)).to.be(false)
  })
})
