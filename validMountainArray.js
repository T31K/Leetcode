var validMountainArray = function(arr) {
    if (arr.length < 3){
    return false
    }

    let max_index = arr.indexOf(Math.max.apply(0,arr))
    let front_half = arr.splice(0,max_index)
    let front_sorted = front_half.slice().sort((a,b) => a-b)
    let front_check = front_half.join('') === front_sorted.join('') && !front_half.some((val, i) => front_half.indexOf(val) !== i)? true : false
    let back_half = arr.slice()
    let back_sorted = back_half.slice().sort((a,b) => b-a)
    let back_check = back_half.join('') === back_sorted.join('')  && !back_half.some((val, i) => back_half.indexOf(val) !== i) ? true : false

    return front_check && back_check
}