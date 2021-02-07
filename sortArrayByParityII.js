const A = [4, 2, 5, 7]

let arr_even = []
let arr_odd = []
let output = []

for (let i = 0 ; i < A.length ; i++){
  if (A[i] % 2 === 0){
    arr_even.push(A[i])
  } else {
    arr_odd.push(A[i])
  }
}

for (var j = 0 ; j < arr_even.length ; j++){
  output.push(arr_even[j])
  output.push(arr_odd[j])
}
console.log(output)