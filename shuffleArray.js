// Runtime: 88 ms, faster than 68.48% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.5 MB, less than 56.50% of JavaScript online submissions for Shuffle the Array.

const shuffleArray = (nums, n) => {
  let counter = n + 0
  let output = []
  for (let i = 0; i < counter; i++) {
    output.push(nums[i])
    output.push(nums[n])
    n++
  }
  return output
}

shuffleArray()