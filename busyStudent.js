// ATTEMPT #1
// Runtime: 68 ms, faster than 97.84% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 38.7 MB, less than 30.59% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.

var busyStudent = function(startTime, endTime, queryTime) {
    let counter = 0
    for (var i = 0 ; i < startTime.length ; i++){
        if (endTime[i] >= queryTime && startTime[i] <= queryTime){
            counter++
        } 
    }
    return counter
};
