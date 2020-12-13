// Runtime: 72 ms, faster than 94.77% of JavaScript online submissions for Goal Parser Interpretation.
// Memory Usage: 38.6 MB, less than 32.67% of JavaScript online submissions for Goal Parser Interpretation.

var interpret = function(command) {
    let output = ""
    for (var i = 0 ; i < command.length ; ++i){
        if (command[i] === "G"){
            output += "G"
        } else if (command[i] === "(" && command[i+1] === ")"){
            output += "o"
        } else if (command[i] === "(" && command[i+1] === "a"){
            output += "al"
        }
    }
    return output
}