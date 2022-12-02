let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

if (nums.length === 1) return 0;

function binarySearch(arr) {
  let pivot = arr.length / 2 - 1;
  if (pivot === target) return pivot;

  if (pivot < target) {
    let arr = arr.slice(0, pivot);
  } else {
    let arr = arr.slice(pivot, arr.length - 1);
  }

  binarySearch(arr);
}
