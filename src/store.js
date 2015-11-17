var reducer = require('./reducer.js');
var createBoard  = require('./actions').createBoard;

import {createStore} from 'redux'

function configureStore(size) {
  return createStore(reducer)
}

module.exports = configureStore

