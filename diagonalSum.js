// Runtime: 84 ms, faster than 52.05% of JavaScript online submissions for Matrix Diagonal Sum.
// Memory Usage: 40.8 MB, less than 38.57% of JavaScript online submissions for Matrix Diagonal Sum.

const diagonalSum = (mat) => {
  let output = 0
  let primaryCounter = 0
  let secondaryCounter = mat[0].length - 1
  for (let i = 0; i < mat.length; i++) {
    output += mat[i][primaryCounter]
    output += mat[i][secondaryCounter]
    primaryCounter++
    secondaryCounter -= 1
  }

  if (mat.length % 2 !== 0) {
    const checker = Math.floor(mat.length / 2)
    output -= mat[checker][checker]
  }
  return output
}

diagonalSum()
