candies = [4,2,1,1,2]
extraCandies = 1

const kidsWithCandies = function(candies, extraCandies) {
    const output = candies.map(() => {
        if (candies + extraCandies >=  Math.max.apply(Math, candies)) {
            return true
        } else {
            return false
        }
    })
    return output

}


kidsWithCandies(candies,extraCandies)