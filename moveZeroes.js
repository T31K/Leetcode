var moveZeroes = function(nums) {
    let i = 0
    let counter = 0
    while (i < nums.length){
        if (nums[i] === 0){
            nums.splice(i, 1)
            i = 0
            counter++
        } else {
            i++
        }
    }
    for ( var j = 0 ; j < counter ; j++){
        nums.push(0)
    }
    return nums
}