// trash algorithm but easy to understand and works

var isPerfectSquare = function(nums) {
    let valid = true
    let i = 1
    while (i <= nums){
        let val = i * i
        if (val === nums){
            valid = false
            return true
            break
        }
        i++
       
    }
        return false
    }
    