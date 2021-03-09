// Runtime: 72 ms, faster than 92.23% of JavaScript online submissions for Find the Highest Altitude.
// Memory Usage: 38.3 MB, less than 81.66% of JavaScript online submissions for Find the Highest Altitude.

const largestAltitude = (gain) => {
    let checker = 0
    let max = 0
    for (let i = 0 ; i < gain.length ; i++) {
        checker += gain[i]
        if (checker > max){
            max = checker
        }
    }
    return max
}