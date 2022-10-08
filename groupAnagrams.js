let strs = ["eat","tea","tan","ate","nat","bat"]
let obj = {}
for (let i =0; i < strs.length; i++) {
  let t = strs[i].split('').sort().join('')
  
  if (t in obj) {
    obj[t].push(i)
  } else {
    obj[t] = []
    obj[t].push(i)
  }
}

let arr = []
let output = []
for (o in obj) {
  arr = []
  for (let i = 0; i < obj[o].length; i++) {
    arr.push(strs[obj[o][i]])
  }
  output.push(arr)
}

console.log(output)
