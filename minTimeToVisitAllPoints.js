// Runtime: 72 ms, faster than 98.55% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 39.6 MB, less than 95.86% of JavaScript online submissions for Minimum Time Visiting All Points.

// ATTEMPT #1
// APPROACH:
// As usual, don't over complicate things, if you remember your middle school Math
// #1 get the difference of two points ## points[i+1] - points[i]
// #2 take the higher number (because that's the max time you'll take)
// #3 Math.abs if it's negative, because negative means you're moving downwards/left (think graphs)
// #4 Add them together et violà

var minTimeToVisitAllPoints = function(points) {
    let output = 0
    for (var i = 0 ; i < points.length - 1; i++){
        let first = Math.abs(points[i+1][0] - points[i][0])
        let second = Math.abs(points[i+1][1] - points[i][1])
        let total = first > second ? first : second
        output += total
    }
    return output
};