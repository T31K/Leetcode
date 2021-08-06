var lengthOfLastWord = function(s) {
    let j = s.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
    let last = j[j.length - 1].length
    return last
}
