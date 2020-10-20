var decompressRLElist = (nums) => {
    const output = []
    for (let i = 0 ; i < nums.length ; i += 2){
            for (let j = 0; j < nums[i] ; j++){
                output.push(nums[i+1])
            }
    }
    return output
}