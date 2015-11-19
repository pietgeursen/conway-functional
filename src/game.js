var conway = require('./conway.js')
var store = require('./store.js')(10);
var createElement = require('virtual-dom/create-element');
var test = require('./components/test.js');
var vdux = require('vdux')

store.dispatch({type: 'SET', r:1, c:1})
store.dispatch({type: 'SET', r:1, c:2})
store.dispatch({type: 'SET', r:2, c:1})
store.dispatch({type: 'SET', r:2, c:2})


store.dispatch({type: 'SET', r:5, c:3})
store.dispatch({type: 'SET', r:5, c:4})
store.dispatch({type: 'SET', r:5, c:5})


function step() {
  store.dispatch({type: 'STEP'})
}

var app = (state) => {
    return test(state)
}
setInterval(step, 200)

document.addEventListener('DOMContentLoaded', () => {
    vdux(store, app, document.body)
})
