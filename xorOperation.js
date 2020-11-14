
let n = 4
let s = 3
let array = []
var output,final;

var xorOperation = function(n, start) {
    if (n === 1 || n === 0) {
        return start
    } else {
    for (let i = 0 ; i < n ; i++){
        if (i === 0){
            array.push(start)
        } else {
            array.push(start+=2)
        }
    }
  
    for (let j = 2 ; j < n+1 ; j++){
        if (j === 2) {
            output = array[0] ^ array[1]
        } else {
            output = output ^ array[j-1]
        }
    }
return output
}
}
// }
console.log(xorOperation(n,s))
