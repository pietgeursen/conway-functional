var outOfBounds = require('./outOfBounds')

function indicesOutOfBounds (r, c, array) {
  return outOfBounds(r, array) || outOfBounds(c, array)
}
module.exports = indicesOutOfBounds
