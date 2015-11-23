
var { createStore } = require('redux')

var reducer = require('./reducer.js')
var { createBoard } = require('conways')

function configureStore (size) {
  return createStore(reducer, createBoard(size))
}

module.exports = configureStore
