    // 2nd attempt - remove unecessary looping
    // Explanation: perform a reverse loop straight away, push it to array, and .join()
    // Runtime: 80 ms, faster than 96.58% of JavaScript online submissions for Reverse Words in a String III.
    var reverseWords = function(s) {
        let arr = []
        let str = ""
        for ( var i = s.length - 1 ; i >= 0 ; i--){
            if (s[i] !== " " && i !== 0){
                str += s[i]
            }  else {
                if (i === 0){
                    str += s[i]
                    arr.push(str)
                } else {
                    arr.push(str)
                    str = ""
                }
            }
        }
        return arr.reverse().join(' ')
    }

    // 1st attempt - Runtime: 104 ms (inefficient looping)
    var reverseWords = function(s) {

        let arr = []
        let str = ""
        let output = ""
        for (var i = 0 ; i < s.length + 1 ; i++){
            if (s[i] !== " " && i !== s.length){
                str += s[i]
            } else {
                arr.push(str)
                str = ""
            }
        }
    
        for (var j = 0 ; j < arr.length ; j++){
        for (var k = arr[j].length - 1 ; k >= 0 ; k--){
            output += arr[j][k]
        } 
        if (j !== arr.length - 1){
            output += " "
    
        }
    }
        return output
    }