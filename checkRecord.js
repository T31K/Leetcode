// Runtime: 72 ms, faster than 81.45% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 38.7 MB, less than 77.04% of JavaScript online submissions for Student Attendance Record I.

var checkRecord = function(s) {
    let absence = 0
    let late = true

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "A") {
          absence += 1
      }
      if (s[i] === "L") {
        if (s[i+1] === "L" && s[i+2] === "L") {
          late = false
        }
      }
    }
    return absence < 2 && late
}
