const root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]

var leafSimilar = function(root1,root2){
    let arr1 = []
    let arr2 = []

    const helper = (node, arr) => {
        if (node !== null){
            helper(node.left, arr)
            helper(node.right,arr)
            if (!node.left && !node.right){
                arr.push(node.val)
            }
        }
    }

    helper(root1,arr1)
    helper(root2,arr2)
    return arr1.join(' ') === arr2.join(' ')
}

