
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
const n = 234

const subtractProductAndSum = (n) => {
    let output = 1
    for (let i = 0 ;  i < n.toString().length ; i ++){
        if (i === 0) {
            output *= Number(n.toString()[i])
            console.log(output)

    }
    else {
        output *= Number(n.toString()[i+1])
        console.log(output)
    }
}

}
subtractProductAndSum(n)
