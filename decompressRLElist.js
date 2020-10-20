const decompressRLElist = (nums) => {
    let output = []
    for (let i = 0 ; i < nums.length ; i++){
        if (i % 2 === 0){
            for (let j = 0; j < nums[i] ; j++){
                output.push(nums[i+1])
            }
        } else {
            continue
        }
    }
    return output
}