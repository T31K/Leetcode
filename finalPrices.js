
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
// For items 3 and 4 you will not receive any discount at all.

const prices = [8,4,6,2,3]
const ans = [4,2,4,2,3]
let counter = 0
let output = []
for (var i = 0 ; i < prices.length ; i++){
    counter = 0
    for (var j = i + 1 ; j < prices.length ; j++){
        if (prices[i] > prices[j] && counter === 0){
            output.push(prices[i] - prices[j])
            counter++
        } 
    }
    if (i === prices.length - 1){
        output.push(prices[i])
    }
}
console.log(output)