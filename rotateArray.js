var rotate = function(nums, k) {
    let len = nums.length + 0 
    let extract = nums.splice(len - k, k)
    let output = extract.concat(nums)
    return output
}