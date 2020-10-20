// var sumOddLengthSubarrays = function(arr) {
    
// };

arr = [1,4,2,5,3]
console.log(arr.length)
var output = 0

    if (arr.length === 2){
        for (var i = 0 ; i < arr.length ; i++){
            output += arr[i]
        }
    }

    else if (arr.length === 3){
        for (var i = 0 ; i < arr.length ; i++){
            output += arr[i] * 2
        }
    }

    else {
        if (arr.length % 2 !== 0){
            var len = (arr.length + 1) / 2
            for (var j = 0 ; j < len ; j++){
                
            }
        }
        else{

        }
    }


// arr.length = 3
// arr.length = 1