const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = nums.reduce((v, i) => v + i) - nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += nums[i];
      rightSum -= nums[i + 1];
    }
  }

  return -1;
};
