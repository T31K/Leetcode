const s = "I speak Goat Latin"
// var toGoatLatin = function(S) {
    
// };
let output = ""
let counter = 1
for (var i = 0 ; i < s.length ; i++){
    if (s[i] !== " " & i !== s.length -1){
        output += s[i]
    } else {
        output += "m" 
        counter += 1
        for (var j = 0 ; j < counter ; j++){
            output += "a"
        }
        output += " "
    }
}
console.log(output)