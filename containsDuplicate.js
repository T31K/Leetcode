// Runtime: 80 ms, faster than 94.10% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 41.6 MB, less than 84.78% of JavaScript online submissions for Contains Duplicate.
// APPROACH
// 1. SORT
// 2. CHECK IF I === I+1
// 3. IF SAME RETURN TRUE AND BREAK
// 4. IF NOT CONITNUE CHECKING
// 5. IF END OF THE ARRAY MEANS THERE IS NO DUPLICATE, RETURN FALSE

// 24/12/2020
var containsDuplicate = function (input) {
  let sorted = input.sort((a, b) => a - b);
  if (sorted.length > 1) {
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        return true;
        break;
      } else {
        if (i !== sorted.length - 1) {
          continue;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};

// 03/10/2022
const containsDuplicate = function (nums) {
  if (nums.length === 1) {
    return false;
  } else {
    let unique = [...new Set(nums)];
    return unique.toString() !== nums.toString();
  }
};
