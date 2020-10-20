const findNumbers = (nums) => {
    const string = nums.toString()
    let counter = 0
    let total = 0

        for (let i = 0 ; i < string.length ; i++){
            if (string[i] === ','){
                if (counter % 2 == 0){
                    total += 1
                    counter = 0
                } else {
                    counter = 0
                }
                
            } else {
                counter += 1
            }
            
            if (i === string.length - 1){
                counter % 2 == 0 ? total += 1 : null
            }
        }

    return total
}

