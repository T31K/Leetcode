
const transactions = ["alex,676,260,bangkok","bob,656,1366,bangkok","alex,393,616,bangkok","bob,820,990,amsterdam","alex,596,1390,amsterdam"]
// var invalidTransactions = function(transactions) {
    let output = []
    let str = ""
    let final = []
    for (var i = 0 ; i < transactions.length ; i++){
        for (var j = 0 ; j < transactions[i].length ; j++){
            if (transactions[i][j] !== ","){
                if (j !== transactions[i].length - 1){
                    str += transactions[i][j]
                } else {
                    str += transactions[i][j]
                    output.push(str)
                    str = ""
                }
            } else {
                output.push(str)
                str = ""
            }
        }        
    }
    if (Number(output[2]) < 1000){
        if(Number(output[6]) < 1000){
            if (output[0] === output[4]){
                if (output[3] !== output[7]){
                    if (Number(output[5]) - Number(output[1]) < 60){
                        final.push(transactions[1])
                        final.push(transactions[0])
                    }
                }
            }
        } else {
            final.push(transactions[1])
        }
    } else {
        final.push(transactions[0])
    };
    // return final
// }
console.log(output)