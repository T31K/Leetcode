var longestPalindrome = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }

  let sortedObj = Object.entries(obj)
    .sort(([, a], [, b]) => a - b)
    .reverse();
  let output = 0;
  let usedOne = false;

  for (let i = 0; i < sortedObj.length; i++) {
    let currentNum = sortedObj[i][1];

    if (currentNum % 2 === 0) {
      output += currentNum;
    } else {
      if (usedOne) {
        output += currentNum - 1;
      } else {
        output += currentNum;
        usedOne = true;
      }
    }
  }
  return output;
};
