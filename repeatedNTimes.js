// Runtime: 116 ms, faster than 24.71% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 42.6 MB, less than 45.40% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

const repeatedNTimes = (A) => {
    A.sort( (a,b) => a - b)
    let output = 1

    for (let i = 0 ; i < A.length ; i++){
        if (A[i] === A[i+1]){
            output += 1
            if (output === A.length/2){
                return A[i]
            }
        }
    }
};