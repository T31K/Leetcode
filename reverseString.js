// Runtime: 108 ms, faster than 78.35% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.5 MB, less than 16.15% of JavaScript online submissions for Reverse String.
// ATTEMPT #1
// 1. Get length of array
// 2. if even, swap is needed array.length/2 times
// 3. if odd, swap is needed array.length - 1 / 2 times
// 4. swap first and last element, continue
// 5. odd number length middle elements dont require swap

var reverseString = function(input) {
    if (input.length % 2 !== 0){
    let times = (input.length - 1)/2
    for (var i = 0 ; i < times ; i++){
        [input[i],input[input.length - (i+1)]] = [input[input.length - (i+1)],input[i]]
    }
} else {
    let times = input.length / 2
    for (var j = 0 ; j < times ; j++){
        [input[j],input[input.length - (j+1)]] = [input[input.length - (j+1)],input[j]]
    }
}
    return input
};