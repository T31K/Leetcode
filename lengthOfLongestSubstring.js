let obj = {}
let s =  ""
let str = s[0]

for (let i = 1; i < s.length; i++) {
  if (!str.includes(s[i])) {
    str += s[i]
  } else {
    if (str in obj) {
      obj[str] = obj[str] += 1
    } else {
      obj[str] = 1
    }
    str = ""
    str += s[i]
  }
}

console.log(obj)

return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b).length
console.log(max.length)
