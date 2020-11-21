// Attempt #1
// Runtime: 92 ms, faster than 83.11% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 39.9 MB, less than 85.87% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
const nums = [6,5,4,8]
let output = []
let counter = 0
for (var i = 0 ; i < nums.length ; i++){
    counter = 0
    for (var j = 0 ; j < nums.length ; j++){
        if (i === j){
            continue
        } else {
            if (nums[i] > nums[j]){
                counter++
            }
        }
    }
    output.push(counter)
}

