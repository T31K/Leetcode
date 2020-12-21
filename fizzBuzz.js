// Runtime: 88 ms, faster than 46.76% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 40.1 MB, less than 96.65% of JavaScript online submissions for Fizz Buzz.

var fizzBuzz = function(n) {
    let output = []
    for (var i = 1 ; i <= n; ++i){
        if (i % 3 === 0){
            if (i % 5 === 0) {
                output.push("FizzBuzz")
            } else {
                output.push("Fizz")
            }
        } else if (i % 5 === 0){
            if (i % 3 === 0){
                output.push("FizzBuzz")
            } else {
                output.push("Buzz")
            }
        } else {
            output.push(i.toString())
        }
    }
    
        return output
    };