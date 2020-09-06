var colors = [1,2,3,4,4,3,2,1]
var n = 4

var i = 0
var ii = n * 2
newList = []

while (i < colors.length / 2){
    newList.push(colors[i])
    newList.push(colors[n])
    i++
    n++
}

console.log(newList)


