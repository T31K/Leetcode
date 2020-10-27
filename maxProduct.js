var maxProduct = function(nums) {
    let first_max = Math.max(...nums)
    let index = nums.indexOf(first_max)
    nums.splice(index,1)
    let second_max = Math.max(...nums)

    return (first_max - 1) * (second_max - 1)
};
