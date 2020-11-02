var selfDividingNumbers = function(left, right) {
    let i = left;
    var output = []

    while (i <= right){
        if (i < 10) {
            output.push(i)
        } else{
            let str = i.toString()
            let final = 0
            for (var j = 0 ; j < str.length ; j++){
                i % Number(str[j]) === 0 ?
                null : final -= 1
            }
            final === 0 ? output.push(i) : null
        }  
        i++
    }
    return output
}