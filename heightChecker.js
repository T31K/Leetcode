
// var heightChecker = function(heights) {

const heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]; 
let output = 0
let answer = []
for ( var j = 0 ; j < heights.length ; j++){
    answer.push(heights[j])
}
answer.sort(function(a, b){return a-b});
// console.log(answer)
for (var i = 0 ; i < heights.length ; i++){
    if (answer[i] !== heights[i]){
        output++
    }
}
console.log(output)

