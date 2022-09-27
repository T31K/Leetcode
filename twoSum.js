/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let complementPair = target - nums[i];
    if (complementPair in obj) {
      arr.push(obj[complementPair]);
      arr.push(i);
      return arr;
    } else {
      obj[nums[i]] = i;
    }
  }
};
