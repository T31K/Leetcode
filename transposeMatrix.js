// Runtime: 88 ms, faster than 81.75% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 41.4 MB, less than 9.13% of JavaScript online submissions for Transpose Matrix.

var transpose = function(input) {
    let temp_array = []
    let output = []
    for (var i = 0 ; i < input[0].length ; ++i){
        for (var j = 0 ; j <input.length ; ++j){
            temp_array.push(input[j][i])
        }
        output.push(temp_array)
        temp_array = []
    }
    return output
};