
var uniqueOccurrences = function(arr) {
    let output = []
    let unique = [...new Set(arr)];

    for (var i = 0 ; i < unique.length ; i ++){
        let result = arr.filter(arr => arr === unique[i])
        output.push(result.length)
    }

    let final = [...new Set(output)];
    if (final.toString() === output.toString()){
        return true
    } else {
        return false
    }
}