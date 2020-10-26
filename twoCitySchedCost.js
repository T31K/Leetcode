// twoCitySchedCost = function(costs) {

// };
let output_ori = []
let output_mod = []
let a_counter = 0
let b_counter = 0
const costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
for (var i = 0 ; i < costs.length ; i++){
    var diff = costs[i][1] - costs[i][0]
    output_ori.push(diff)
    output_mod.push(Math.abs(diff))
}
// console.log(output_ori)
// console.log(output_mod)
for (var j = 0 ; j < output_mod.length ; j++){
    Math.mod.apply(0,output_mod)
}
console.log(output_mod.indexOf(Math.min.apply(0, output

// const min = Math.min.apply(0, output)
// output[output.indexOf(Math.min.apply(0, output))] = max
// console.log(output)

// console.log(output.indexOf(max))
// // console.log(output)
// // console.log(output.indexOf(Math.min.apply(0, output)))

// 259 770 2 A
// 448 54  3 B
// 926 667 4 B
// 184 139 6
// 840 118 1 B
// 577 469 5

//   index %2 === 0         => A +1
//   index %2 !== 0         => B -1




