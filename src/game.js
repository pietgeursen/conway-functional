var store = require('./store.js')(60)
var board = require('./components/board.js')
var vdux = require('vdux')

var app = (state) => {
  return board(state)
}

function makeGlider () {
  store.dispatch({type: 'SET', r: 4, c: 2})
  store.dispatch({type: 'SET', r: 4, c: 3})
  store.dispatch({type: 'SET', r: 4, c: 4})
  store.dispatch({type: 'SET', r: 3, c: 4})
  store.dispatch({type: 'SET', r: 2, c: 3})
}

function spawnRandom () {
  for (var i = 0, l = store.getState().length; i < l; i++) {
    for (var j = 0; j < l; j++) {
      if (Math.random() > 0.7) {
        store.dispatch({type: 'SET', r: i, c: j})
      }
    }
  }
}

makeGlider()
spawnRandom()

document.addEventListener('DOMContentLoaded', () => {
  vdux(store, app, document.body)
})

function step () {
  store.dispatch({type: 'STEP'})
}
setInterval(step, 100)
