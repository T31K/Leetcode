// Runtime: 72 ms, faster than 93.20% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39 MB, less than 12.41% of JavaScript online submissions for Search Insert Position.
// ATTEMPT #1 - O(n), n being array length


var searchInsert = function(nums, target) {
    var found = false
    for (var i = 0 ; i < nums.length ; i++){
        if (nums[i] === target){
            return i
            found = true
            break
        }
    }

    if (!found){
        nums.push(target)
        nums.sort(function(a,b) { return a - b; })
        return nums.indexOf(target)
    }
};