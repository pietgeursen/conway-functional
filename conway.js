exports.overPopulated = function overPopulated(population){
    return population >= 3
}
exports.underPopulated = function(population){
    return population < 2
}
exports.ressurectable = function(population){
    return population == 3
}
exports.outOfBounds = function outOfBounds(index, array){
    return index < 0 || index >= array.length
}
exports.createBoard = function(size){
    var board = new Array(size)
    for(var i = 0; i < size; i++){
        board[i] = new Array(size)
    } 
    return board
}
exports.eachNeighbour = function(r,c,board){
    var neighbours = []
    for(var i=-1; i<2; i++){
        for(var j=-1; j<2; j++){
            var _r = r + i
            var _c = c + j
            if(i == 0 && j == 0){
                continue
            }
            if(exports.outOfBounds(_r, board)|| exports.outOfBounds(_c, board[0])){
                continue
            }
            neighbours.push(board[_r][_c])
        }
    }
    return neighbours;
}
