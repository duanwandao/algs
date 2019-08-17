//inorder iteration template

var kthSmallest = function(root, k) {
  if (!root) {
    return null;
  }

  const stack = [];
  const res = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }

  for(let i = 0; i < k; i ++) {
    const currNode = stack.pop();
    res.push(currNode.val);

    let newNode = currNode.right;

    while (newNode) {
      stack.push(newNode);
      newNode = newNode.left;
    }
  }
  return res[k - 1];
};
