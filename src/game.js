var conway = require('./conway.js')
var board = conway.createBoard(15)

conway.store.dispatch({type: 'SET', r:1, c:1})
conway.store.dispatch({type: 'SET', r:1, c:2})
conway.store.dispatch({type: 'SET', r:2, c:1})
conway.store.dispatch({type: 'SET', r:2, c:2})


conway.store.dispatch({type: 'SET', r:5, c:3})
conway.store.dispatch({type: 'SET', r:5, c:4})
conway.store.dispatch({type: 'SET', r:5, c:5})


function step() {
  conway.store.dispatch({type: 'STEP'})
}

setInterval(step, 200)
