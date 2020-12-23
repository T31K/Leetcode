// Runtime: 120 ms, faster than 18.11% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 45.3 MB, less than 9.46% of JavaScript online submissions for Valid Anagram.

var isAnagram = function(s, t) {
    let sort_s = s.split('').sort().join('')
    let sort_t = t.split('').sort().join('')
    return sort_s === sort_t 
}
