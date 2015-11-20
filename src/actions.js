var conway = require('./conway.js')

var actions = {
  nextBoard: conway.nextBoard.bind(conway),
  createBoard: conway.createBoard.bind(conway)
}

module.exports = actions
