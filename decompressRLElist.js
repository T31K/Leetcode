// var decompressRLElist = function(nums) {
    
// };

let output = []
for (let i = 0 ; i < nums.length ; i++){
    if (i % 2 === 0){
        //even
        for (let j = 0; j < nums[i] ; j++){
            output.push(nums[i+1])
        }
    } else {
        continue
    }

}

console.log(output)