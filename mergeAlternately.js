// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Merge Strings Alternately.
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Merge Strings Alternately.

const mergeAlternately = (word1, word2) => {
  const wordChecker = word1.length >= word2.length ? word1.length : word2.length
  let output = ''
  for (let i = 0; i < wordChecker; i++) {
    output += word1[i] === undefined ? '' : word1[i]
    output += word2[i] === undefined ? '' : word2[i]
  }
  return output
}
