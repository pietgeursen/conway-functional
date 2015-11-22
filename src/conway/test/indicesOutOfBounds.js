var expect = require('expect.js')
var indicesOutOfBounds = require('../indicesOutOfBounds')

describe('#indicesOutOfBounds', function () {
  it('returns true with an index < 0', function () {
    expect(indicesOutOfBounds(-1, 0, [])).to.be(true)
  })
  it('returns true with an index larger >= array.length', function () {
    expect(indicesOutOfBounds(1, 0, [])).to.be(true)
  })
  it('returns false with a valid index', function () {
    expect(indicesOutOfBounds(0, 0, [1])).to.be(false)
  })
})
