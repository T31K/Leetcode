// Runtime: 80 ms, faster than 94.04% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 41 MB, less than 15.80% of JavaScript online submissions for Flipping an Image.

const flipAndInvertImage = (image) => {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse()
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 0) {
        image[i].splice(j, 1, 1)
      } else {
        image[i].splice(j, 1, 0)
      }
    }
  }
  return image
}
