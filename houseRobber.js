let nums =  [2,3,2]
//  nums =   0,1,2,3

let maxIndex = nums.indexOf(Math.max(...nums))
let arr = new Array(nums.length).fill(false)
let output = 0

// left
let leftCounter = 0
for (let i = maxIndex; i < nums.length; i++) {
  if (leftCounter % 2 === 0) {
    arr[i] = true
  }
  leftCounter++
}

let rightCounter = 0
for (let j = maxIndex; j >= 0; j--) {
  if (rightCounter % 2 === 0) {
    arr[j] = true
  }
  rightCounter++
}

// total
for (let k = 0; k < nums.length; k++) {
  if (arr[k]) {
    output += nums[k]
  }
}
