// Runtime: 208 ms, faster than 5.41% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 58.6 MB, less than 5.16% of JavaScript online submissions for Monotonic Array.
// Pretty bad runtime

var isMonotonic = function(A) {
    let A_in = A.slice().sort( (a,b) => a-b).join()
    let A_de = A.slice().sort( (a,b) => b-a).join()
    let A_join = A.join()
    if (A_join === A_in){
        return true
    } else if (A_join === A_de){
        return true
    } else{
        return false
    }
};