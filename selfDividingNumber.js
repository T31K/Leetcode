
// var selfDividingNumbers = function(left, right) {
    
// };
const left = 1;
let i = left;
const right = 22;
var output = []

while (i <= right){
    if (i < 10) {
        output.push(i)
    } else{
        let str = i.toString()
        let final = 0
        for (var j = 0 ; j < str.length ; j++){
            i % Number(str[j]) === 0 ?
            null : final -= 1
        }
        final === 0 ? output.push(i) : null
    }  
    i++
}




console.log(output)