let n = 3;

let arr = new Array(n).fill(0);
let matrix = [];
for (let i = 0; i < 3; i++) {
  matrix.push(arr.slice());
}
let tmpMatrix = matrix.slice();
let direction = 'right';
let counter = 1;

function setMatrix(tmp) {
  switch (direction) {
    case 'right':
      if (tmp.length === 0) return matrix;
      for (let i = 0; i < tmp[0].length; i++) {
        matrix[0][i] = counter;
        counter++;
      }
      tmp.splice(0, 1);
      direction = 'down';

    case 'down':
      if (tmp.length === 0) return matrix;
      for (let i = 0; i < tmp.length; i++) {
        matrix[i][matrix[i].length - 1] = counter;
        counter++;
      }
      tmp.map((mat) => mat.splice(tmp.length - 1, 1));
      direction = 'left';

    // case 'left':
    //   if (m.length === 0) return matrix;
    //   for (let i = m[m.length - 1].length - 1; i >= 0; i--) {
    //     matrix[matrix.length - 1][i] = counter;
    //     counter++;
    //   }
    //   m.splice(m.length - 1, 1);
    //   direction = 'up';

    // case 'up':
    //   if (m.length === 0) return matrix;
    //   for (let i = m.length - 1; i >= 0; i--) {
    //     matrix[i][0] = counter;
    //     counter++;
    //   }
    //   m.map((m) => m.splice(0, 1));
    //   direction = 'right';

    //   if (m.length === 0) {
    //     return matrix;
    //     break;
    //   } else {
    //     setMatrix(m);
    //   }
  }
}
setMatrix(tmpMatrix);
console.log(matrix);
console.log(tmpMatrix);
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
// 0 0 0 0
