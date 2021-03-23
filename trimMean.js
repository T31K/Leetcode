// Runtime: 84 ms, faster than 73.21% of JavaScript online submissions for Mean of Array After Removing Some Elements.
// Memory Usage: 39.2 MB, less than 85.12% of JavaScript online submissions for Mean of Array After Removing Some Elements.

const trimMean = (arr) => {
  const times = arr.length * 0.05
  for (let i = 0; i < times; i++) {
    const max = Math.max.apply(0, arr)
    const min = Math.min.apply(0, arr)
    arr.splice(arr.indexOf(max), 1)
    arr.splice(arr.indexOf(min), 1)
  }
  const sum = arr.reduce((a, b) => a + b, 0) / arr.length
  const output = Number(sum.toFixed(5))

  return output
}

trimMean()
