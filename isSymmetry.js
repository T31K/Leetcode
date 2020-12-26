// Runtime: 92 ms, faster than 58.95% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 40.1 MB, less than 95.74% of JavaScript online submissions for Symmetric Tree.


var isSymmetric = function(root){
    if (root === null){
        return true
    }

    return isMirror(root.left, root.right)
}

var isMirror = function(t1,t2){
    if (t1 === null || t2 === null){
        return t1 === t2
    }

    if (t1.val !== t2.val){
        return false
    }

    return isMirror(t1.left,t2.right) && isMirror(t1.right,t2.left)
}