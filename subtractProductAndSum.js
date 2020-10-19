



const subtractProductAndSum = (n) => {
    let input = n.toString()
    let product = 1
    let sum = 0
    let output = 0

    for (let i = 0 ; i < input.length ; i++){
        product *= Number(input[i])
        sum += Number(input[i])
    }

    return output = product + sum 
};






// console.log(product)
// console.log(sum)