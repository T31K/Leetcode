// Runtime: 68 ms, faster than 97.49% of JavaScript online submissions for Create Target Array in the Given Order.
// Memory Usage: 38.7 MB, less than 50.91% of JavaScript online submissions for Create Target Array in the Given Order.

var createTargetArray = function(nums, index) {
    let output = []
    for (var i = 0 ; i < index.length ; i++){
        output.splice(index[i], 0, nums[i])
    }
    return output
};