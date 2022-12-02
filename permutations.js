let nums = [1, 2, 3];
let arrNum = nums.slice();
let output = [];

for (let i = 0; i < nums.length; i++) {
  [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  output.push(nums);
}
output.push(arrNum);

console.log(output);
