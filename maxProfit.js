const maxProfit = (prices) => {
    let x = 0
    for (let i = 0 ; i < prices.length ; i++){
        if (prices[i+1] > prices[i]){
            x += prices[i+1] - prices[i]
        }
    }
    return x
}