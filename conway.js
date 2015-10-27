exports.overPopulated = function(population){
    return population >= 3
}
exports.underPopulated = function(population){
    return population < 2
}
exports.ressurectable = function(population){
    return population == 3
}
exports.outOfBounds = function(index, array){
    return index < 0 || index >= array.length
}
exports.createBoard = function(size){
    var board =  new Array(size)
    for(var i = 0; i < size; i++){
        board[i] = new Array(size)
    } 
    return board
}
