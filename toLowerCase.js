var toLowerCase = function(str) {
    var output = ""
    for (var i = 0 ; i < str.length ; i++){
        str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65 ?
            output += String.fromCharCode(str.charCodeAt(i)+=32) :
            output += String.fromCharCode(str.charCodeAt(i))
    }
    return output
};


