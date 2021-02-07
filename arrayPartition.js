// Runtime: 140 ms, faster than 36.36% of JavaScript online submissions for Array Partition I.

var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b)
    let array = []
    let output = 0 
    for (var i = 0 ; i < nums.length ; i++){
        if (i % 2 === 0){
            array.push(nums[i])
        } else {
            array.push(nums[i])
            output += Math.min.apply(0, array)
            array = []
        }
    }
    return output
};