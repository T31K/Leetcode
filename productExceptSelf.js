var productExceptSelf = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    nums[i] = 1;
    let total = nums.reduce((a, b) => a * b, 1);
    output.push(total === -0 ? 0 : total);
    nums[i] = val;
  }
  return output;
};
