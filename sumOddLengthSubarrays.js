arr = [1,4,2,5,3]
var i = arr.length
var output = 0
for (var i = arr.length ; i > 1 ; i -= 2){
    for (var j = 0 ; j < arr.length ; j++){
        output += arr[j-arr.length]
    }
}    
