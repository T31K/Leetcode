const rotate = (matrix) => {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let k = i; k < matrix.length; k++) {
      [matrix[i][k], matrix[k][i]] = [matrix[k][i], matrix[i][k]];
    }
  }
  return matrix;
};
