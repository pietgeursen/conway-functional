var expect = require('expect.js')
var conway = require('../src/conway.js')

describe('#overPopulated', function () {
    it ('should return true with cell count > 3', function () {
        expect(conway.overPopulated(4)).to.be(true) 
    })
    it ('should return false with cell count < 4', function () {
        expect(conway.overPopulated(3)).to.be(false) 
    })
})

describe('#underPopulated', function () {
    it ('should return true with cell count < 2', function () {
        expect(conway.underPopulated(1)).to.be(true) 
    })
    it ('should return false with cell count < 3', function () {
        expect(conway.underPopulated(2)).to.be(false) 
    })
})
describe('#ressurectable', function () {
    it ('should return true with cell count == 3', function () {
        expect(conway.ressurectable(3)).to.be(true) 
    })
    it ('should return false with cell count != 3', function () {
        expect(conway.ressurectable(2)).to.be(false) 
    })
})
describe('#outOfBounds', function(){
    it ('returns true with an index < 0',function(){
        expect(conway.outOfBounds(-1, [])).to.be(true)
    })
    it ('returns true with an index larger >= array.length',function(){
        expect(conway.outOfBounds(1, [])).to.be(true)
    })
    it ('returns false with a valid index',function(){
        expect(conway.outOfBounds(0, [1])).to.be(false)
    })

})
describe('#indicesOutOfBounds', function(){
    it ('returns true with an index < 0',function(){
        expect(conway.indicesOutOfBounds(-1, 0, [])).to.be(true)
    })
    it ('returns true with an index larger >= array.length',function(){
        expect(conway.indicesOutOfBounds(1, 0, [])).to.be(true)
    })
    it ('returns false with a valid index',function(){
        expect(conway.indicesOutOfBounds(0, 0, [1])).to.be(false)
    })

})
describe('#createBoard', function () {
    it ('should create a 2d array of the given dimensions', function () {
        var board = conway.createBoard(10)
        expect(board.length).to.be(10)
        expect(board[9].length).to.be(10)
    })
})
describe('#getNeighbours', function () {
    it ('should return 8 neigbours', function () {
        var board = conway.createBoard(10)
        expect(conway.getNeighbours(2,2, board).length).to.be(8) 
    })
    it ('should return 3 neigbours for a corner cell', function () {
        var board = conway.createBoard(10)
        expect(conway.getNeighbours(0,0, board).length).to.be(3) 
    })
})
describe('#countAliveNeighbours',function(){
    it('return 8 for a cell with all alive neighbours', function(){
        var board = conway.createBoard(10)
        board[0][0] = true
        board[0][1] = true
        board[0][2] = true
        board[1][0] = true
        board[2][0] = true
        board[2][1] = true
        board[2][2] = true
        board[1][2] = true
        expect(conway.countAliveNeighbours(1, 1, board)).to.be(8)
    })
    it('returns 3 for a corner cell with all alive neighbours', function(){
        var board = conway.createBoard(10)
        board[0][1] = true
        board[1][1] = true
        board[1][0] = true
        expect(conway.countAliveNeighbours(0, 0, board)).to.be(3)
    })

})

describe('#nextCellState', function () {
    it ('returns true if cell is alive and neighbour count is 2 or 3', function () {
        expect(conway.nextCellState(true, 3)).to.be(true) 
        expect(conway.nextCellState(true, 2)).to.be(true) 
    })
    it ('should return false if cell is alive and overpopulated', function () {
        expect(conway.nextCellState(true, 4)).to.be(false) 
    })
    it ('should return true id cell is dead and ressurectable', function () {
        expect(conway.nextCellState(false, 3)).to.be(true) 
    })
})
describe('#nextBoard', function () {

    describe ('should make valid new boards with example boards', function () {
        var board
        beforeEach(function(){
            board = conway.createBoard(10)
        })

        it('Example 1', function(){
            board[0][0] = true
            var newBoard = conway.nextBoard(board)
            expect(newBoard[0][0]).to.be(false) 
        })
        it('Example 2', function(){
            board[1][1] = true
            board[1][2] = true
            board[2][1] = true
            board[2][2] = true
            var newBoard = conway.nextBoard(board)
            expect(newBoard[2][2]).to.be(true) 
            expect(newBoard[1][1]).to.be(true) 
            expect(newBoard[2][1]).to.be(true) 
            expect(newBoard[1][2]).to.be(true) 
        })
        it('Example 3', function(){
            board[0][0] = true
            board[0][1] = true
            board[1][0] = true
            var newBoard = conway.nextBoard(board)
            expect(newBoard[1][1]).to.be(true) 
        })
    })
})
