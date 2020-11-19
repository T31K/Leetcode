const s = "Let's take LeetCode contest"

// var reverseWords = function(s) {
    
// };
let arr = []
let str = ""
let output = ""
for (var i = 0 ; i < s.length + 1 ; i++){
    if (s[i] !== " " && i !== s.length){
        str += s[i]
    } else {
        arr.push(str)
        str = ""
    }
}

for (var j = 0 ; j < arr.length ; j++){
    for (var k = arr[j].length - 1 ; k >= 0 ; k--){
        output += arr[j][k]
    } 
    if (j !== arr.length - 1){
        output += " "

    }
}
