// Runtime: 84 ms, faster than 16.39% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 39 MB, less than 8.82% of JavaScript online submissions for Thousand Separator.

var thousandSeparator = function(n) {
    let str = n.toString()
    
    if (str.length <= 3){
        return str
    } else {
        let arr = str.split("")
        console.log(arr)
        let counter = 0
        for (var i = arr.length - 1 ; i >= 0 ; i--){
            counter += 1
            if (counter === 3 && i !== 0){
                arr.splice(i, 0, ".")
                counter = 0
            }
        }
        return arr.join('')
    }
    }