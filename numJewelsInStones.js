

var J = "aA"
var S = "aAAbbbb"
// var numJewelsInStones = function(J, S) {
    
// };
let i = 0
let count = 0

    for (let j = 0 ; j < J.length ; j++) {
        for (let s = 0 ; s < S.length ; s++)
            if (J[j] === S[s]){
                count++
        }
    }
    


console.log(count)