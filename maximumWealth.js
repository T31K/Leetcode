// Runtime: 76 ms, faster than 79.80% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 38.9 MB, less than 11.59% of JavaScript online submissions for Richest Customer Wealth.
// ATTEMPT #1 
// EXPLANATION:
// 1. LOOP THROUGH EACH ARRAY WITHIN THE ARRAY
// 2. ADD THE TOTAL OF EACH ARRAY INTO VARIABLE NUMBER
// 3. PUSH VARIABLE TO NEW ARRAY AT THE END OF EVERY ITERATION
// 4. MATH.MAX THE NEW ARRAY

var maximumWealth = function(accounts) {

    let number = 0
    let output = []
    for (var i = 0 ; i < accounts.length ; i++){
        number = 0
        for (var j = 0 ; j < accounts[i].length; j++){
            number += accounts[i][j]
        }
        output.push(number)
    }

    return Math.max.apply(0, output)
}