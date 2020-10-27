
// var maxProduct = function(nums) {
    
// };

const nums = [3,4,5,2]
var max = Math.max.apply(0,nums)
let counter = 0
let output = 0
for (var i = 0 ; i < nums.length ; i++){
    if (nums[i] === max){
        counter += 1
        
    } else {
        continue
    }
}
let final = counter > 1 ? true : false

if (final){
    output += (max - 1) * (max - 1)
} else {
    const result = nums.filter(num => num < max)
    var new_max = Math.max.apply(0,result)
    output += (max - 1) * (new_max - 1)
}

console.log(output)