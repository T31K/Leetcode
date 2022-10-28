// Runtime: 80 ms, faster than 71.96% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 39 MB, less than 33.82% of JavaScript online submissions for Running Sum of 1d Array.
let nums = [3, 1, 2, 10, 1];
let runningSum;

for (let i = 1; i < nums.length; i++) {
  runningSum = nums[i - 1];
  let sum = runningSum + nums[i];
  nums[i] = sum;
}
console.log(nums);
