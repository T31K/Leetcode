// Runtime: 76 ms, faster than 89.57% of JavaScript online submissions for Kth Missing Positive Number.
// Memory Usage: 39.1 MB, less than 33.92% of JavaScript online submissions for Kth Missing Positive Number.

var findKthPositive = function(arr, k) {
    let output = []
     let counter = 1
     let i = 0
     while (output.length < k){
         if (arr[i] !== counter){
             output.push(counter)
             counter++
         } else {
             i++
             counter++
         }
     } 
     return output[k-1]
 };