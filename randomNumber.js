let arr = [1, 6, 5, 3];
let n = 4;
let k = 2;

let first = arr[Math.floor(Math.random() * arr.length)];
arr.splice(arr.indexOf(first), 1);
let second = arr[Math.floor(Math.random() * arr.length)];
arr.splice(arr.indexOf(second), 1);

console.log(arr);
