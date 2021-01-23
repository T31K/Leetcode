

let num_copy = 14
let counter = 0
while (num_copy > 0){
    if (num_copy % 2 === 0){
        num_copy /= 2
        counter++
    } else {
        num_copy -= 1
        counter++
    }
}
console.log(counter)