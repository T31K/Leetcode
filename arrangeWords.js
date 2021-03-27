// Runtime: 88 ms, faster than 85.48% of JavaScript online submissions for Rearrange Words in a Sentence.
// Memory Usage: 42.5 MB, less than 81.45% of JavaScript online submissions for Rearrange Words in a Sentence.
const arrangeWords = (input) => {
    const text = input.toLowerCase()
    const arr = text.split(' ').sort( (a,b) => a.length - b.length)
    const first = arr.shift()
    const char  = first.charAt(0).toUpperCase() + first.slice(1)
    arr.unshift(char)
    return arr.join(' ')
}

arrangeWords()
