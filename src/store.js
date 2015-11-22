var reducer = require('./reducer.js')
var createBoard = require('conways').createBoard

import { createStore } from 'redux'

function configureStore (size) {
  return createStore(reducer, createBoard(size))
}

module.exports = configureStore
