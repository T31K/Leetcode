var s = "codeleet", indices = [4,5,6,7,0,2,1,3]


var restoreString = function(s, indices) {
    var input = indices.sort()
    var output = ""
    for (var i = 0 ; i < indices.length ; i++){
        output += s[indices[i]] 
        }
    return output
}
console.log(restoreString(s, indices))