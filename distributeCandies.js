// var a = [1,1,2,2,3,3].reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//         if( acc[curr] > 1){
//             output.push(acc[cur])
//         } else{
//             acc[curr] = 1;
//         }
//     } else {
//       acc[curr] += 1;
//     }
//     return acc;
//   },{});


var distributeCandies = function(candyType) {
    let unique = [...new Set(candyType)];
            
    if (candyType.length / 2 < unique.length){
        return candyType.length / 2
    } else {
        return unique.length
    }

};