const restoreString = function(s, indices) {
    const output = []
    for (let i = 0 ; i < indices.length ; i++){
        output.push(s[indices.indexOf(i)])
        }
    return output.join('')
}