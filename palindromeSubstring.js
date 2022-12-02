let words = ['cc', 'll', 'xx'];
let obj = {};
let output = 0;
for (let i = 0; i < words.length; i++) {
  let curr = words[i];
  if (palindrome(curr)) {
    output += 2;
  } else {
    if (words[i].split('').reverse().join('') in obj) {
      output += 4;
    } else {
      obj[words[i]] = 2;
    }
  }
  console.log(output);
  console.log(obj);
}

function palindrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log(obj);
console.log(output);
