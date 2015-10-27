[33mdiff --git a/test/conwaySpec.js b/test/conwaySpec.js[m
[33mindex 9cd0159..fe7f591 100644[m
[33m--- a/test/conwaySpec.js[m
[33m+++ b/test/conwaySpec.js[m
[35m@@ -45,3 +45,27 @@[m [mdescribe('create board', function () {[m
         expect(board[9].length).to.be(10)[m
     })[m
 })[m
[32m+[m[32mdescribe('count alive neighbours',function(){[m
[32m+[m[32m    xit('return 8 for a cell with all alive neighbours', function(){[m
[32m+[m[32m        var board = conway.createBoard(10)[m
[32m+[m[32m        board[0][1] = true[m
[32m+[m[32m        expect(conway.countAliveNeighbours(3, 3, board)).to.eq(8)[m
[32m+[m[32m    })[m
[32m+[m[32m    xit('return 3 for a corner cell with all alive neighbours', function(){[m
[32m+[m[32m        var board = conway.createBoard(10)[m
[32m+[m[32m        board[0][1] = true[m
[32m+[m[32m        board[1][1] = true[m
[32m+[m[32m        board[1][0] = true[m
[32m+[m[32m        expect(conway.countAliveNeighbours(0, 0, board)).to.eq(3)[m
[32m+[m[32m    })[m
[32m+[m
[32m+[m[32m})[m
[32m+[m[32mdescribe('eachNeighbour', function () {[m
[32m+[m[32m    it ('', function () {[m
[32m+[m[32m        var board = conway.createBoard(10)[m
[32m+[m[32m        expect(conway.eachNeighbour(2,2, board)).to.be(true)[m[7;37m [m
[32m+[m[32m    })[m
[32m+[m[32m    it ('should return false with cell count < 3', function () {[m
[32m+[m[32m        expect(conway.overPopulated(2)).to.be(false)[m[7;37m [m
[32m+[m[32m    })[m
[32m+[m[32m})[m
