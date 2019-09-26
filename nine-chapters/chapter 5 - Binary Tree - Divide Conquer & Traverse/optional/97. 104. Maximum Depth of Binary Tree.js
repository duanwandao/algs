
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};



// traverse, recursion
const maxDepth2 = (root) => {
  let depth = 0;

  const traverse = (node, currDepth) => {
    if (!node) {
      return;
    }

    depth = Math.max(depth, currDepth);
    traverse(node.left, currDepth + 1);
    traverse(node.right, currDepth + 1);
  };

  traverse(root, 1);
  return depth;
};
