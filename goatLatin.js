const s = "I speak Goat Latin"

let output = ""
let tmp = ""
let counter = 1
let tmp_counter = 0
for (var i = 0 ; i < s.length ; i++){
    if (s[i] !== " " & i !== s.length -1){
        if (tmp_counter === 0){
            tmp += s[i]
            tmp_counter += 1
        } else {
            output += s[i]
        }
    } else if ( i === s.length - 1){
        output += s[i]
        output += tmp
        counter += 1
        output += "m" 
        for (var j = 0 ; j < counter ; j++){
            output += "a"
        }
    }
    else {
        output += tmp
        tmp_counter = 0
        output += "m" 
        counter += 1
        for (var j = 0 ; j < counter ; j++){
            output += "a"
        }
        output += " "
        tmp = ""
    }
}
console.log(output)















// var toGoatLatin = function(S) {
    
// };
// let output = ""
// let tmp = ""
// let counter = 1
// let tmp_counter = 0
// for (var i = 0 ; i < s.length ; i++){
//     if (s[i] !== " " & i !== s.length -1){
//         if (tmp_counter === 0){
            
//             tmp += s[i]
//             tmp_counter += 1
//         } else {
//             output += s[i]
//         }
//     } else if ( i === s.length - 1){
//         output += s[i]
//         output += tmp
//         counter += 1
//         console.log(counter)
//         for (var j = 0 ; j < counter ; j++){
//             output += "a"
//         }
//     }
//     else {
//         output += tmp
//         tmp_counter = 0
//         output += "m" 
//         counter += 1
//         for (var j = 0 ; j < counter ; j++){
//             output += "a"
//         }
//         output += " "
//         tmp = ""
//     }
// }