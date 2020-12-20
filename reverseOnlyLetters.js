const input = "Test1ng-Leet=code-Q!"
let str = ""
let reverse_input = input.split("").reverse().join("").replace(/[^a-zA-Z0-9+]/g, '')
console.log(reverse_input)
console.log(input)
const letters = /^[a-zA-Z]+$/
let j = 0
for (var i = 0 ; i < input.length ; i++){
    if(input[i].match(letters)){
        str += reverse_input[i]
    } else {
        str += input[i]
    }
}
console.log(str)
// console.log(str.replace(/\s/g, ''))
// }
// let flipped = alphanum.reverse().join("")
// console.log(flipped)
// let output = ""
// for (var j = 0 ; j < flipped.length ; j++){
//     if(input[j].match("^[a-zA-Z0-9]*$")){
//         output += flipped[j]
//     } else {
//         output += input[j]
//     }
// }

// console.log(output)