var shuffle = function(nums, n) {
    
    var i = 0
    var ii = n * 2
    newList = []
    
    while (i < nums.length / 2){
        newList.push(nums[i])
        newList.push(nums[n])
        i++
        n++
    }
    
    return newList
};