var overPopulated = require('./overPopulated')
var underPopulated = require('./underPopulated')
var ressurectable = require('./ressurectable')

function nextCellState (cellState, neighbourCount) {
  if (cellState) {
    return !overPopulated(neighbourCount) && !underPopulated(neighbourCount)
  } else {
    return ressurectable(neighbourCount)
  }
}
module.exports = nextCellState
