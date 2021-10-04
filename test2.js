let arr = ['co', 'dil', 'ity']

let string = ""
let output = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length ; j++) {
    let str1 = arr[i]
    string += str1
    if (i !== j) {
      let str2 = arr[j]
      let checker = string.concat(str2)
      console.log(checker)
      let array = checker.split('')
      let unique = [...new Set(array)].join('')
      if (unique === checker) {
        output++
      }
    }
    string = ""
  }
}
