var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  let node = root;
  while (node) {
    if (node.val >= val) {
      if (node.left) {
        node = node.left;
      } else {
        node.left = new TreeNode(val);
        break;
      }
    } else {
      if (node.right) {
        node = node.right;
      } else {
        node.right = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};


var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val >= val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
