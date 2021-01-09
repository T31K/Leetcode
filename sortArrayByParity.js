// Runtime: 100 ms, faster than 56.71% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 41.5 MB, less than 30.45% of JavaScript online submissions for Sort Array By Parity.
var sortArrayByParity = function(input) {
    let odd = []
    let even = []
    for (var i = 0 ; i < input.length ; i++){
        if (input[i] % 2 === 0){
            even.push(input[i])
        } else {
            odd.push(input[i])
        }
    }

    let output = even.concat(odd)
    return output
};