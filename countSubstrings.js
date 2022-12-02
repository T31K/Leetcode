let s = 'aaa'

let str = ""
let count = 0
for (let i = 0; i < s.length; i++) {
  str = ""
  for (let j = i; j < s.length; j++) {
    str += s[j]
    if (str.split('').reverse().join('') === str) {
      count++
     }
  }
}

console.log(count)
