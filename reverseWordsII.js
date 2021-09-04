// Runtime: 87 ms, faster than 25.13% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 39.9 MB, less than 92.88% of JavaScript online submissions for Reverse Words in a String.

var reverseWords = function(s) {
    let arr = s.split(" ").filter(function(el) {return el.length != 0})

    let j = 1
    for (let i = 0; i < Math.round(arr.length / 2); i++) {
        arr.length - j
        let tmp = arr[arr.length - j]
        arr[arr.length - j] = arr[i]
        arr[i] = tmp
        j++
    }

    return arr.join(" ").toString()

};
