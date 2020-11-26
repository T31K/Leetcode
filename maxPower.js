// ATTEMPT #1 - (not my greatest work, have a massive headache coding whole day, but gotta grind leetcode everyday :p, will attempt second time to get better runtime)

// Runtime: 76 ms, faster than 97.05% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 39.1 MB, less than 71.74% of JavaScript online submissions for Consecutive Characters.

// Time Complexity = O(n), where n is input size. Pretty straightforward

// This algorithm basically:
// 1. Keeps track of two numbers with two counter variables
// 2. Iterate through each i and check if i+1 is similar
// 3. If i + 1 is similar, add +2 (for first repeat) // +1 for consecutive repeats
// 4. If i+1 is different, crosscheck against counter 2 to see if it is the biggest number
// 5. Return number

var maxPower = function(s) {
    let counter = 0
    let second_counter = 0
    for (var i = 0 ; i < s.length ; i++){
        if (s[i] === s[i+1]){
            if (counter === 0){
                counter+= 2
            }
            else{
                counter++
            }
        } else {
            if (counter > second_counter){
                second_counter = 0
                second_counter += counter
                counter = 0
            } else{
                counter = 0
            }

        }
    }
    return second_counter > 0 ? second_counter :  1
};