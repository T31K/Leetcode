let text = "balllllllllllloooooooooon"
let arr = text.split("")
let check = 0

const count = new Map([...new Set(arr)].map(
  x => [x, arr.filter(y => y === x).length]
))

for (let [k, v] of count) {
  if (k === "b" || k === "a" || k === "l" || k === "o" || k === "n") {
    check += v
  }
}
console.log(check)

if (check % 7 !== 0) {
  console.log(0)
} else {
  console.log(check / 7)
}
// b = 1
// a = 1
// n = 1

// l = 2
// o = 2
for (let i = 0; i < text.length; i++) {

}
