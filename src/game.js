var conway = require('./conway.js')
var store = require('./store.js')(10);

store.dispatch({type: 'SET', r:1, c:1})
store.dispatch({type: 'SET', r:1, c:2})
store.dispatch({type: 'SET', r:2, c:1})
store.dispatch({type: 'SET', r:2, c:2})


store.dispatch({type: 'SET', r:5, c:3})
store.dispatch({type: 'SET', r:5, c:4})
store.dispatch({type: 'SET', r:5, c:5})

store.subscribe(() => {
	const board = store.getState()
	conway.displayBoard(board)
})

function step() {
  store.dispatch({type: 'STEP'})
}

setInterval(step, 200)
