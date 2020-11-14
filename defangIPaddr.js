const defangIPaddr = function(address) {
    let output = ""
    for (let i = 0 ; i < address.length ; i++){
        if (address[i] === "."){
            output += "[.]"
        } else{
            output += address[i]
        }
    }
    return output
}