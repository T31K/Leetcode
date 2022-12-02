let obj = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

let digits = '23';
let arr = [];
for (let i = 0; i < digits.length; i++) {
  arr.push(obj[digits[i]]);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i][j]);
  }
}
