// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Count Items Matching a Rule.
// Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions for Count Items Matching a Rule.

const countMatches = (items, ruleKey, ruleValue) => {
  let checker
  let output = 0
  if (ruleKey === 'type') {
    checker = 0
  } else if (ruleKey === 'color') {
    checker = 1
  } else {
    checker = 2
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][checker] === ruleValue) {
      output++
    }
  }
  return output
}

countMatches()
