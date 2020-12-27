// Runtime: 84 ms, faster than 57.98% of JavaScript online submissions for Defuse the Bomb.
// Memory Usage: 39.2 MB, less than 23.67% of JavaScript online submissions for Defuse the Bomb.
// ATTEMPT #1
// APPROACH:
// 1. check if k is positive or negative
// 2. if positive, remove first element using shift()
// 3. iterate k number of times and add it to sum
// 4. push sum to output and return output

// 5. if negative, reverse array first
// 6. change k to positive
// 7. repeat step 3&4
// 8. reverse output again and return

var decrypt = function(code, k) {
    let output = []
    let sum = 0

    if (k > 0){
        for (var i = 0 ; i < code.length ; i++){
            let first = code.shift()
            code.push(first)
            for (var j = 0 ; j < k ; j++){
                sum += code[j]
            }
            output.push(sum)
            sum = 0
        }
        return output
    } else {
        code.reverse()
        k *= -1
        for (var i = 0 ; i < code.length ; i++){
            let first = code.shift()
            code.push(first)
            for (var j = 0 ; j < k ; j++){
                sum += code[j]
            }
            output.push(sum)
            sum = 0
        }
        return output.reverse()
    }
};