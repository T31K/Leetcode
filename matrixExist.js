//  a b c e
// s f c s
// a d e e

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

let word = 'ABCCED';
let arr = [];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === word[0]) arr.push([i, j]);
  }
}
let matchWordIndex = 1;
let coord = arr[0];

console.log(checkSurroundings(coord, matchWordIndex));
function checkSurroundings(coord, matchWordIndex) {
  let matchWord = word[matchWordIndex];
  let newCoord;
  let row = coord[0];
  let col = coord[1];

  let up = col + 1 <= board[0].length - 1 ? [row, col + 1] : null;
  let down = col - 1 >= 0 ? [row, col - 1] : null;
  let right = row + 1 <= board.length ? [row + 1, col] : null;
  let left = row - 1 >= 0 ? [row - 1, col] : null;

  if (up && up === matchWord) {
    newCoord = up;
    matchWordIndex += 1;
    checkSurroundings(newCoord, matchWordIndex);
  } else if (down && down === matchWord) {
    newCoord = down;
    matchWordIndex += 1;
    checkSurroundings(newCoord, matchWordIndex);
  } else if (right && right === matchWord) {
    newCoord = right;
    matchWordIndex += 1;
    checkSurroundings(newCoord, matchWordIndex);
  } else if (left && left === matchWord) {
    newCoord = left;
    matchWordIndex += 1;
    checkSurroundings(newCoord, matchWordIndex);
  } else {
    if (matchWordIndex === word.length - 1) {
      let finalRow = newCoord[0];
      let finalCol = newCoord[1];
      if (board[finalRow][finalCol]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
// 21
// top => 11 (- rows)
// left right => (- / + columns)
// bottom => 31 (+ rows)
