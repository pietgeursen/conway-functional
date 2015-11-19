var conway = require('./conway.js')
var store = require('./store.js')(60);
var board = require('./components/board.js')
var vdux = require('vdux')

store.dispatch({type: 'SET', r:1, c:1})
store.dispatch({type: 'SET', r:1, c:2})
store.dispatch({type: 'SET', r:2, c:1})
store.dispatch({type: 'SET', r:2, c:2})


store.dispatch({type: 'SET', r:5, c:3})
store.dispatch({type: 'SET', r:5, c:4})
store.dispatch({type: 'SET', r:5, c:5})

var app = (state) => {
    return board(state)
}

document.addEventListener('DOMContentLoaded', () => {
    vdux(store, app, document.body)
})

function step() {
  store.dispatch({type: 'STEP'})
}

setInterval(step, 200)
