const height = [2, 3, 4, 5, 18, 17, 6];

let pointer_1 = 0;
let pointer_2 = height.length - 1;
let allAreas = [];
let counter = 1;
while (pointer_1 < pointer_2) {
  let containerHeight =
    height[pointer_1] <= height[pointer_2]
      ? height[pointer_1]
      : height[pointer_2];
  let containerWidth = pointer_2 - pointer_1;
  let area = containerHeight * containerWidth;

  console.log(counter);
  allAreas.push(area);
  if (height[pointer_1] < height[pointer_2]) {
    pointer_1 += 1;
  } else {
    pointer_2 -= 1;
  }
  counter++;
}

console.log(allAreas);
