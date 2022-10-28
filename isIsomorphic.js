let s = 'foo';
let t = 'bar';

let testStrOne = '1';
let counterOne = 1;
let hashOne = {};
hashOne[s[0]] = 1;

let testStrTwo = '1';
let counterTwo = 1;
let hashTwo = {};
hashTwo[t[0]] = 1;
let countTwo = 1;
let countOne = 1;

for (let i = 1; i < s.length; i++) {
  let strOne = s[i];
  if (strOne in hashOne) {
    counterOne = hashOne[strOne];
  } else {
    countOne += 1;
    hashOne[strOne] = countOne;
    counterOne = hashOne[strOne];
  }
  testStrOne += counterOne;

  let strTwo = t[i];
  if (strTwo in hashTwo) {
    counterTwo = hashTwo[strTwo];
  } else {
    countTwo += 1;
    hashTwo[strTwo] = countTwo;
    counterTwo = hashTwo[strTwo];
  }
  testStrTwo += counterTwo;
}
console.log(testStrOne);
console.log(testStrTwo);
