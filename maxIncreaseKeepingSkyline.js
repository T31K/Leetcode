const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
var output = 0
for (var i = 0 ; i < grid.length ; i++){
    // get horizontal max
    let h_max = Math.max.apply(0, grid[i])
    // console.log('h max '+Math.max.apply(0, grid[i]))
    for (var k = 0 ; k < grid[i].length ; k++){
        var arr = [] 
        var v_max
        var max
        for ( var j = 0 ; j < grid[i].length ; j++){
            arr.push(grid[j][k])
        }
        v_max = Math.max.apply(0, arr)
        h_max > v_max ? max = v_max : max = h_max
        output += max - grid[i][k]
    }
}
console.log(output)