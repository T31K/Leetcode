// Runtime: 80 ms, faster than 51.05% of JavaScript online submissions for Rotate String.
// Memory Usage: 40.7 MB, less than 8.74% of JavaScript online submissions for Rotate String.


var rotateString = function(A, B) {
    let arr = A.split('')
    
    if (A === B || A === "" && B === ""){
        return true
    }
    for (var i = 0 ; i < B.length ; i++){
        if (arr.join("") === B){
            return true
            break
        }
        let first = arr.shift()
        arr.push(first)
    }
    return false
}