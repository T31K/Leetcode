// Runtime: 84 ms, faster than 98.15% of JavaScript online submissions for Add Digits.
// Memory Usage: 40.3 MB, less than 28.52% of JavaScript online submissions for Add Digits.
// Not my solution, read all the discussion on Leetcode

var addDigits = (num) => {
    return num < 10 ? num : num % 9 === 0 ? 9 : num % 9
}