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
function createBoard(size){
    var board = new Array(size)
    for(var i = 0; i < size; i++){
        board[i] = new Array(size)
    } 
    return board
}
function eachNeighbour(r,c,board){
    var neighbours = []
    for(var i=-1; i<2; i++){
        for(var j=-1; j<2; j++){
            var _r = r + i
            var _c = c + j
            if(i == 0 && j == 0){
                continue
            }
            if(outOfBounds(_r, board)|| outOfBounds(_c, board[0])){
                continue
            }
            neighbours.push(board[_r][_c])
        }
    }
    return neighbours;
}

exports.eachNeighbour = eachNeighbour
exports.outOfBounds = outOfBounds
exports.ressurectable = ressurectable
exports.underPopulated = underPopulated
exports.overPopulated = overPopulated
exports.createBoard = createBoard
