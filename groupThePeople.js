// var groupThePeople = function(groupSizes) {
// const groupSizes = [3,3,3,3,3,1,3]
    let counter = {}
    let ans = []
    for(let i = 0; i < groupSizes.length; i++){
        console.log(counter[groupSizes[i]])
        if(counter[groupSizes[i]]){
            if(counter[groupSizes[i]][counter[groupSizes[i]].length-1].length < groupSizes[i]){
                counter[groupSizes[i]][counter[groupSizes[i]].length-1].push(i)
            } else {
                counter[groupSizes[i]].push([i])
            }
        } else {
            counter[groupSizes[i]] = [[i]]
        }
        let sub = counter[groupSizes[i]][counter[groupSizes[i]].length-1]
        if(sub.length === groupSizes[i]) ans.push(sub)
    }
    return ans
  };
