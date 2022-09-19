const arithmeticTriplets = (nums, diff) => {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(nums[i]) &&
      nums.includes(nums[i] + diff) &&
      nums.includes(nums[i] + diff + diff)
    ) {
      output += 1;
    }
  }
  return output;
};
