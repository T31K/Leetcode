// Runtime: 72 ms, faster than 91.20% of JavaScript online submissions for Reformat Date.
// Memory Usage: 38.5 MB, less than 69.18% of JavaScript online submissions for Reformat Date.
// ATTEMPT #1

var reformatDate = function(date) {
    let split = date.split(" ")

    // day
    let d = split[0].replace(split[0][split.length-1], "")
    let day_checker = d.replace(d[d.length-1], "")
    let day = day_checker.length === 2 ? day_checker : `0${day_checker}`

    // month
    let month_arr = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul","Aug","Sep", "Oct","Nov","Dec"]
    let month_check = month_arr.findIndex( (month) => (split[1] === month)) + 1
    let month = month_check.toString()
    let month_final = month.length === 2 ? month : `0${month}`

    // year
    let year = split[2]

    // result
    let output = `${year}-${month_final}-${day}`
    return output
};