const restoreString = function(s, indices) {
    let output = ''
    for (let i = 0 ; i < indices.length ; i++){
        output += (s[indices.indexOf(i)])
        }
    console.log(output)
}

console.log(restoreString(s, indices))