
var maximum69Number  = function(num) {

let str = num.toString()
let output = ""
let six_counter = 0
for (var i = 0 ; i < str.length ; i++){
    if (str[i] === '6'){
        if (six_counter === 0){
        output += "9"
        six_counter += 1
        } else {
            output += "6"
        }
    }  else {
        output += "9"
    }
}

return(Number(output))  
}
