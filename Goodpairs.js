const numIdenticalPairs = function(nums) {
    let counter = 0;
    for (let i = 0 ; i < nums.length ;i++){
        for (let j = 0 ; j < nums.length ; j++){
            if (i === j){
                continue
            }
            else if (nums[i] === nums[j]){
                counter += 1;
            }
        }   
    }
    return counter/2;
}