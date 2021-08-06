let isHappy = (n) => {
  while (n >= 10) {
    let m = n.toString()
    let number = Math.pow(Number(m[0]), 2) + Math.pow(Number(m[1]), 2)
    n = number + 0
  }

  return n === 1
}
