var conway = require('./conway.js')

function reducer (state = conway.createBoard(10), action) {
  switch (action.type) {
    case 'SET' :
      let newState = state.slice()
      newState[action.location.row][action.location.column] = true
      return newState
    case 'STEP':
      return conway.nextBoard(state)
    default:
      return state
  }
}

module.exports = reducer
