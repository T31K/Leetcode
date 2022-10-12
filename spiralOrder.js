const spiralOrder = (matrix) => {
  let output = [];
  let direction = 'right';

  function setMatrix(matrix) {
    switch (direction) {
      case 'right':
        if (matrix.length === 0) {
          return output;
          break;
        }
        for (let i = 0; i < matrix[0].length; i++) {
          output.push(matrix[0][i]);
        }
        matrix.splice(0, 1);
        direction = 'down';

      case 'down':
        if (matrix.length === 0) {
          return output;
          break;
        }
        for (let i = 0; i < matrix.length; i++) {
          output.push(matrix[i][matrix[i].length - 1]);
        }
        matrix.map((mat) => mat.splice(mat.length - 1, 1));
        direction = 'left';

      case 'left':
        if (matrix.length === 0) {
          return output;
          break;
        }
        for (let i = matrix[matrix.length - 1].length - 1; i >= 0; i--) {
          output.push(matrix[matrix.length - 1][i]);
        }
        matrix.splice(matrix.length - 1, 1);
        direction = 'up';

      case 'up':
        if (matrix.length === 0) {
          return output;
          break;
        }
        for (let i = matrix.length - 1; i >= 0; i--) {
          output.push(matrix[i][0]);
        }
        matrix.map((mat) => mat.splice(0, 1));
        direction = 'right';

        if (matrix.length === 0) {
          return output;
          break;
        } else {
          setMatrix(matrix);
        }
    }
  }

  setMatrix(matrix);
  return output.filter((item) => item == 0 || item);
};
