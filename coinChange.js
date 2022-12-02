let coins = [2];
let amount = 3;

let count = 0;

while (amount !== 0) {
  let max = coins[coins.length - 1];
  if (amount >= max) {
    amount -= max;
    count += 1;
  } else {
    if (coins.length !== 1) {
      coins.pop();
    } else {
      console.log("-1");
      break;
    }
  }
}

console.log(count);
