
// var wordPattern = function(pattern, s) {
    
// };

const pattern = "abc"
const s = "b c a"
let i_output = []
let j_output = []
let counter = []
let final = []
for (var i = 0 ; i < pattern.length ; i++){
    i_output.push(pattern.charCodeAt(i) - 96)
}
console.log(i_output)

for ( var j = 0 ; j < s.length ; j++){
    if ( j == 0 || s[j-1] === " "){
        j_output.push(s.charCodeAt(j) - 96)
    }
}
console.log(j_output)
if (i_output.length !== j_output.length){
    return false
} else { 
    for ( var k = 0 ; k < i_output.length ; k++){
        for (var l = 0 ; l < i_output.length - 1; l++){
            let i_test = Math.abs(i_output[k] - i_output[l+1])
            console.log('i = '+i_test)
            let j_test = Math.abs(j_output[k] - j_output[l+1])
            console.log('j = '+j_test)
            if (i_test == j_test){
                final.push(true)
            } else {
                final.push(false)
            }
        }
    }

    let checker = arr => arr.every(Boolean);
    console.log(checker(final));
}
