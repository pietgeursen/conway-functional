var expect = require('expect.js')
var ressurectable = require('../ressurectable')

describe('#ressurectable', function () {
  it('should return true with cell count == 3', function () {
    expect(ressurectable(3)).to.be(true)
  })
  it('should return false with cell count != 3', function () {
    expect(ressurectable(2)).to.be(false)
  })
})
