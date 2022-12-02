let nums = [2,3,-2,4]

let currentProduct = nums[0]
let maxProduct = nums[0]

for (let i = 1; i < nums.length; i++) {
  currentProduct = Math.max(currentProduct * nums[i], nums[i])
  maxProduct = Math.max(currentProduct, maxProduct)
}

[-2,3, -4]
