function overPopulated(population){
    return population >= 3
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
exports.getNeighbours = getNeighbours
exports.outOfBounds = outOfBounds
exports.indicesOutOfBounds = indicesOutOfBounds
exports.ressurectable = ressurectable
exports.underPopulated = underPopulated
exports.overPopulated = overPopulated
exports.createBoard = createBoard
exports.countAliveNeighbours = countAliveNeighbours
