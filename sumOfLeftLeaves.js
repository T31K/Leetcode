var sumOfLeftLeaves = function(root) {
    return getSum(root, 0, false);
};

function getSum(node, sum, isLeft) {
    if (node == null) {
        return 0;
    }
    
    if (isLeft && 
        node.left == null &&
        node.right == null) {
        sum += node.val;
    }
    
    return sum + getSum(node.left, sum, true) + getSum(node.right, sum, false);
}