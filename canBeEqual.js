// Runtime: 88 ms, faster than 61.28% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 40.2 MB, less than 77.95% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.

target.sort((a,b)=> { a-b})
arr.sort((a,b)=> { a-b})
target.toString() === arr.toString() ? console.log(true) : console.log(false)