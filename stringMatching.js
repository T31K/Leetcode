// Runtime: 84 ms, faster than 58.57% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 38.5 MB, less than 90.36% of JavaScript online submissions for String Matching in an Array.

var stringMatching = function(words) {
    let output = []
    words.sort( (a,b) => a.length-b.length)
    for (var i = 0 ; i < words.length ; i++){
        for (var j = 0 ; j < words.length ; j++){
            if (i === j){
                continue
            } else {
                if (words[i].includes(words[j])){
                    output.push(words[j])
                }
            }
        }
    }
    return [...new Set(output)]
}
