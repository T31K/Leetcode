var isUnivalTree = function(root, value = root.val) {
    if (!root) {
      return true;
    }
    
    if (root.val !== value) {
      return false;
    }
    
    return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
  };