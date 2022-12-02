let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]


let zeroes = []
for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[0].length; c++) {
    if (matrix[r][c] === 0) {
      zeroes.push([r,c])
    }
  }
}

for (let address of zeroes) {
  let row = address[0]
  let col = address[1]
  setMatrix(row, col)
}

function setMatrix(row, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[row][i] = 0
  }
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[j][col] = 0
  }
}

console.log(matrix)
