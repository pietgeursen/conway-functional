var actions = require('./actions.js')

function reducer (state = actions.createBoard(10), action) {
  switch (action.type) {
    case 'SET' :
      let newState = state.slice()
      newState[action.r][action.c] = true
      return newState
    case 'STEP':
      return actions.nextBoard(state)
    default:
      return state
  }
}

module.exports = reducer
