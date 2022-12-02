const prices = [7, 1, 5, 3, 6, 4];

let minBuyPrice = prices[0];
let max = 0;

for (let i = 0; i < prices.length; i++) {
  let sellPrice = prices[i];
  let profit = sellPrice - minBuyPrice;
  max = Math.max(max, profit);
  minBuyPrice = Math.min(minBuyPrice, prices[i]);
}
