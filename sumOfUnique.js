// Runtime: 80 ms, faster than 63.33% of JavaScript online submissions for Sum of Unique Elements.
// Memory Usage: 38.7 MB, less than 72.37% of JavaScript online submissions for Sum of Unique Elements.

const sumOfUnique = (nums) => {
  let counts = {}
  let output = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    counts[num] = counts[num] ? counts[num] + 1 : 1
  }

  const asArray = Object.entries(counts)

  for (let j = 0; j < asArray.length; j++) {
    if (asArray[j][1] === 1){
      output += Number(asArray[j][0])
    }
  }
  return output
}

sumOfUnique()