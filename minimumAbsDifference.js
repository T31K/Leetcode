// Runtime: 220 ms, faster than 18.09% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 56 MB, less than 11.35% of JavaScript online submissions for Minimum Absolute Difference.
// TRASH SOLUTION too tired today bye

var minimumAbsDifference = function(arr) {
    arr.sort( (a,b) => a-b)
    let diff = []
    let output = []
    let final = []
    for (var i = 0 ; i < arr.length - 1 ; i++){
        diff.push(Math.abs(arr[i+1] - arr[i]))
    }
    let max = Math.min.apply(0,diff)
    for (var j= 0 ; j < arr.length - 1; j++){
        final = []
        if (Math.abs(arr[j+1] - arr[j]) === max){
            final.push(arr[j])
            final.push(arr[j+1])
        }
        final.length > 1 ? output.push(final) : null
    }
    return output
};