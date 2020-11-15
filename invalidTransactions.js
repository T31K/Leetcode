
// var invalidTransactions = function(transactions) {
    
// };
let output = []
let str = ""
const transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
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
console.log(output)
