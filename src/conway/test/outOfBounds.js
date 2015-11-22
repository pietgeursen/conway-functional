var expect = require('expect.js')
var outOfBounds = require('../outOfBounds')

describe('#outOfBounds', function () {
  it('returns true with an index < 0', function () {
    expect(outOfBounds(-1, [])).to.be(true)
  })
  it('returns true with an index larger >= array.length', function () {
    expect(outOfBounds(1, [])).to.be(true)
  })
  it('returns false with a valid index', function () {
    expect(outOfBounds(0, [1])).to.be(false)
  })
})
