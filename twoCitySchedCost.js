// twoCitySchedCost = function(costs) {

// };
let output_ori = []
let output_mod = []
let output_res = []
let b_counter = 0
let total = 0
const costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
for (var i = 0 ; i < costs.length ; i++){
    var diff = costs[i][1] - costs[i][0]
    output_ori.push(diff)
    output_mod.push(Math.abs(diff))
}

for (var j = 0 ; j < output_mod.length ; j++){
    var index = output_mod.indexOf(Math.max.apply(0,output_mod))
    const min = output_mod.indexOf(Math.min.apply(0,output_mod))
    output_res.push(index) 
    output_mod[index] = min
}

for (var k = 0 ; k < output_res.length ; k++){
    if (output_ori[output_res[k]] < 0  && b_counter < output_res.length / 2){
        total += costs[output_res[k]][1]
        b_counter += 1
    } else {
        total += costs[output_res[k]][0]

    }
}

console.log(total)
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




