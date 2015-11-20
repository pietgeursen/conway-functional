var store = require('./store.js')(60)
var actions = require('./actions.js')
var board = require('./components/board.js')
var vdux = require('vdux')

var app = (state) => {
  return board(state)
}

function spawnRandom () {
  for (var i = 0, l = store.getState().length; i < l; i++) {
    for (var j = 0; j < l; j++) {
      if (Math.random() > 0.7) {
        store.dispatch(actions.set({row: i, column: j}))
      }
    }
  }
}

spawnRandom()

document.addEventListener('DOMContentLoaded', () => {
  vdux(store, app, document.body)
})

function step () {
  store.dispatch(actions.step())
}
setInterval(step, 100)
