let output_ori = []
let output_mod = []
let output_res = []
let b_counter = 0
let a_counter = 0
let total = 0
const costs =[[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]]
for (var i = 0 ; i < costs.length ; i++){
    var diff = costs[i][1] - costs[i][0]
    if (diff === 0 ){
        output_ori.push(costs[i][1])
        output_mod.push(costs[i][1])
    } else {
        output_ori.push(diff)
        output_mod.push(Math.abs(diff))
    }
}

console.log(output_ori)
console.log(output_mod)
for (var j = 0 ; j < output_mod.length ; j++){
    var index = output_mod.indexOf(Math.max.apply(0,output_mod))
    const min = output_mod.indexOf(Math.min.apply(0,output_mod))
    output_res.push(index) 
    output_mod[index] = min
}
console.log(output_res)
for (var k = 0 ; k < output_res.length ; k++){
    if (output_ori[output_res[k]] < 0  && b_counter < output_res.length / 2){
        total += costs[output_res[k]][1]
        b_counter += 1
        console.log('if' + ' total is ' + total + ' b_counter: ' + b_counter)
    } else {
        total += costs[output_res[k]][0]
        a_counter += 1
        console.log('else ' + ' total is ' + total + ' a_counter: ' + a_counter)

    }
}

console.log(total)



