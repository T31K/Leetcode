// Runtime: 76 ms, faster than 83.88% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 38.6 MB, less than 92.56% of JavaScript online submissions for Last Stone Weight.

let max_1
let max_2
let index_1
let index_2
let diff

while (stones.length > 1){
    max_1 = Math.max.apply(0, stones)
    index_1 = stones.indexOf(max_1)
    stones.splice(index_1,1)

    max_2 = Math.max.apply(0, stones)
    index_2 = stones.indexOf(max_2)
    stones.splice(index_2,1)
    
    if (max_2 > max_1){
        diff = max_2 - max_1
        stones.push(diff)
    } else if (max_2 === max_1){
        continue
    } else {
        diff = max_1 - max_2
        stones.push(diff)
    }
}