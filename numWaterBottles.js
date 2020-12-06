let numBottles = 17
let numExchange = 3
let maxNumber = numBottles

while(numBottles >= numExchange) {
    remainder = numBottles % numExchange
    numBottles = Math.floor(numBottles / numExchange)
    maxNumber += numBottles
    numBottles += remainder
}

console.log(maxNumber) 
