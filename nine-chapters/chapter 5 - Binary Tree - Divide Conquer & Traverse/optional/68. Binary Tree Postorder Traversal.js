const postorderTraversal = function (root) {
  const res = [];
  traverse(root, res);
  return res;
}

const traverse = (root, res) => {
  if (!root) return;
  if (root.left) traverse(root.left, res);
  if (root.right) traverse(root.right, res);
  res.push(root.val);
}

