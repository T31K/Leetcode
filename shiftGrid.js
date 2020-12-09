// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Reformat Date.
// Memory Usage: 42.8 MB, less than 95.33% of JavaScript online submissions for Reformat Date.

var shiftGrid = function(grid, k) {
    var merged = [].concat.apply([], grid);
    let output = []
    var counter = grid[0].length

    for (var i = 0 ; i < k ; ++i){
        var pop = merged.pop()
        merged.unshift(pop)
    }

    for (var j = 0 ; j < grid.length ; ++j){
            var spliced = merged.splice(0,counter)
            output.push(spliced)
    }
        return output
};