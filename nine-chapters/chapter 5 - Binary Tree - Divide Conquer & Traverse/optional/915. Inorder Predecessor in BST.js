// 和 95. 98. Validate Binary Search Tree一个套路，用pre记录前置结点
// inorder iteration模板

const inorderPredecessor = function (root, p) {
  if (!root) {
    return null;
  }
  let pre = null;
  const stack = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }

  while (stack.length) {
    const currNode = stack.pop();

    if (currNode === p) {
      return pre;
    }
    pre = currNode;

    let newNode = currNode.right;

    while (newNode) {
      stack.push(newNode);
      newNode = newNode.left;
    }

  }
  return null;
}
