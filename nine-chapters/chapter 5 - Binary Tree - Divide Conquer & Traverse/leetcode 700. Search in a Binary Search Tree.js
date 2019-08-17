var searchBST = function(root, val) {
  if (!root) {
    return null;
  }
  let node = root;
  while (node) {
    if (node.val > val) {
      node = node.left;
    } else if (node.val < val) {
      node = node.right;
    } else {
      return node;
    }
  }
  return null;
};



var searchBST = function(root, val) {
  if (!root) {
    return null;
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  if (root.val === val) {
    return root;
  }
};
