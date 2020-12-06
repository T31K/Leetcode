// ATTEMPT #1
// Runtime: 84 ms, faster than 73.88% of JavaScript online submissions for Lucky Numbers in a Matrix.
// Memory Usage: 40.8 MB, less than 82.86% of JavaScript online submissions for Lucky Numbers in a Matrix.

// EXPLANATION
// 1. Loop through each array and find min element
// 2. Save the index of the min element
// 3. Nested loop to get each element of that index
// 4. Push all values to temp array
// 5. Get max value of that temp array
// 6. Check if the min element is same as max value
// 7. If same push to output

var luckyNumbers  = function(matrix) {
    let arr = []
    let output = []
    for (var i = 0 ; i < matrix.length ; i++){
        let min_element = Math.min.apply(0,matrix[i]) //3
        let index = matrix[i].indexOf(min_element) // 0
        
        for (var j = 0 ; j < matrix.length ; j ++){
            arr.push(matrix[j][index])
        }
        let max_element = Math.max.apply(0, arr)

        if (matrix[i][index] === max_element){
            output.push(matrix[i][index])
        }
        arr = []
    }    
    return output
}