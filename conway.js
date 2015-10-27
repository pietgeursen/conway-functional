exports.overPopulated = function(population){
    return population >= 3
}
exports.underPopulated = function(population){
    return population < 2
}
exports.ressurectable = function(population){
    return population == 3
}
