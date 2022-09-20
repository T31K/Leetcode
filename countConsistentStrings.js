let allowed = "abc";
let words = ["a", "b", "c", "ab", "ac", "bc", "abc"];

const countConsistentStrings = (allowed, words) => {
  let count = 0;
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    arr = [];
    for (let j = 0; j < words[i].length; j++) {
      if (allowed.includes(words[i][j])) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    if (arr.every((el) => el)) count += 1;
  }
  return count;
};

console.log(countConsistentStrings(allowed, words));
