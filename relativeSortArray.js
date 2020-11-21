// Runtime: 76 ms, faster than 87.62% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 39 MB, less than 51.24% of JavaScript online submissions for Relative Sort Array.

var relativeSortArray = function(arr1, arr2) {
    let output = []

    for (var i = 0 ; i < arr2.length ; i++){
        for (var j = 0 ; j <arr1.length ; j++){
            if (arr2[i] === arr1[j]){
                output.push(arr2[i])
            } 
        }
    }
    let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
    let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);
    return output.concat(unique1.concat(unique2).sort((a,b) => {return a-b}))
};