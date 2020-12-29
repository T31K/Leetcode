// Runtime: 80 ms, faster than 71.96% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 39 MB, less than 33.82% of JavaScript online submissions for Running Sum of 1d Array.

var runningSum = function(nums) {
    let sum 
    let output = []
    output.push(nums[0])

    for (var i = 1 ; i < nums.length ; i++){
        sum = 0
        for (var j = i + 0 ; j >= 0 ; j--){
            sum += nums[j]
        }
        output.push(sum)
    }
    return output
};