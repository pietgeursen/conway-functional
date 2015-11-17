var clear = require('clear');

var conway = {
    overPopulated: function (population){
        return population > 3
    },
    underPopulated: function (population){
        return population < 2
    },
    ressurectable: function (population){
        return population == 3
    },
    outOfBounds: function (index, array){
        return index < 0 || index >= array.length
    },
    indicesOutOfBounds: function (r,c, array){
        return this.outOfBounds(r, array) || this.outOfBounds(c, array)
    },
    createBoard: function (size){
        var board = new Array(size)
            for(var i = 0; i < size; i++){
                board[i] = new Array(size)
            } 
        return board
    },
    getNeighbours: function (r,c,board){
        var neighbours = []
            for(var i=-1; i<2; i++){
                for(var j=-1; j<2; j++){
                    var _r = r + i
                        var _c = c + j
                        if((i == 0 && j == 0) || this.indicesOutOfBounds(_r, _c, board)){
                            continue
                        }
                    neighbours.push(board[_r][_c])
                }
            }
        return neighbours;
    },
    countAliveNeighbours: function (r,c,board){
        var neighbours = this.getNeighbours(r,c,board)
            return neighbours.filter(function(cell){return cell}).length
    },
    nextCellState: function (cellState, neighbourCount){
        if(cellState){
            return !this.overPopulated(neighbourCount) && !this.underPopulated(neighbourCount)
        }
        else{
            return this.ressurectable(neighbourCount) 
        }
    },
    nextBoard: function (currentBoard){
        var nextBoard = this.createBoard(currentBoard.length)
            for (var i = 0; i < currentBoard.length; i++) {
                for(var j = 0; j < currentBoard.length; j++){
                    var cell = currentBoard[i][j]
                        var neighbourCount = this.countAliveNeighbours(i, j, currentBoard)
                        nextBoard[i][j] = this.nextCellState(cell, neighbourCount)
                }
            }
        return nextBoard
    },
    displayBoard: function (board){
        clear()
            for(var i = 0; i < board.length; i++){
                for(var j = 0; j < board.length; j++){
                    var char = board[i][j] ? '|X|' : '| |'
                        process.stdout.write(char)
                }
                process.stdout.write('\n')
            }
    }
}

module.exports = conway
