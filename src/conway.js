var clear = require('clear');
import {createStore} from 'redux'

function conway(state = createBoard(10), action) {
	switch(action.type){
  case 'SET' :
    let newState = state.slice()
    newState[action.r][action.c] = true
    return newState
	case 'STEP':
		return nextBoard(state)
	default:
		return state
	}
}

let store = createStore(conway)
store.subscribe(() => {
	const board = store.getState()
	displayBoard(board)
})


function overPopulated(population){
	return population > 3
}
function underPopulated(population){
	return population < 2
}
function ressurectable(population){
	return population == 3
}
function outOfBounds(index, array){
	return index < 0 || index >= array.length
}
function indicesOutOfBounds(r,c, array){
	return outOfBounds(r, array) || outOfBounds(c, array)
}
function createBoard(size){
	var board = new Array(size)
		for(var i = 0; i < size; i++){
			board[i] = new Array(size)
		} 
	return board
}
function getNeighbours(r,c,board){
	var neighbours = []
		for(var i=-1; i<2; i++){
			for(var j=-1; j<2; j++){
				var _r = r + i
					var _c = c + j
					if((i == 0 && j == 0) || indicesOutOfBounds(_r, _c, board)){
						continue
					}
				neighbours.push(board[_r][_c])
			}
		}
	return neighbours;
}
function countAliveNeighbours(r,c,board){
	var neighbours = getNeighbours(r,c,board)
		return neighbours.filter(function(cell){return cell}).length
}
function nextCellState(cellState, neighbourCount){
	if(cellState){
		return !overPopulated(neighbourCount) && !underPopulated(neighbourCount)
	}
	else{
		return ressurectable(neighbourCount) 
	}
}
function nextBoard(currentBoard){
	var nextBoard = createBoard(currentBoard.length)
		for (var i = 0; i < currentBoard.length; i++) {
			for(var j = 0; j < currentBoard.length; j++){
				var cell = currentBoard[i][j]
					var neighbourCount = countAliveNeighbours(i, j, currentBoard)
					nextBoard[i][j] = nextCellState(cell, neighbourCount)
			}
		}
	return nextBoard
}
function displayBoard(board){
	clear()
		for(var i = 0; i < board.length; i++){
			for(var j = 0; j < board.length; j++){
				var char = board[i][j] ? '|X|' : '| |'
					process.stdout.write(char)
			}
			process.stdout.write('\n')
		}
}
exports.getNeighbours = getNeighbours
exports.outOfBounds = outOfBounds
exports.indicesOutOfBounds = indicesOutOfBounds
exports.ressurectable = ressurectable
exports.underPopulated = underPopulated
exports.overPopulated = overPopulated
exports.createBoard = createBoard
exports.countAliveNeighbours = countAliveNeighbours
exports.nextCellState = nextCellState
exports.nextBoard = nextBoard
exports.displayBoard = displayBoard
exports.store = store
