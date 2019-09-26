const isValidBST1 = (node, min = null, max = null) => {
  if (!node) return true;
  if (min !== null && node.val <= min) return false;
  if (max !== null && node.val >= max) return false;
  return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
};

const isValidBST2 = (root) => {
  let curr = null;
  let isValid = true;

  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    if (curr !== null && curr.val >= root.val) {
      isValid = false;
      return;
    }
    curr = root;
    inorder(root.right);
  };
  inorder(root);

  return isValid;
};


//iteration, 模板
const isValidBST3 = (root) => {
  if (!root) {
    return true;
  }
  let pre = null;
  const stack = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }

  while (stack.length) {
    const currNode = stack.pop();

    if (pre && currNode.val <= pre.val) {
      return false;
    }

    pre = currNode;
    let newNode = currNode.right;

    while (newNode) {
      stack.push(newNode);
      newNode = newNode.left;
    }
  }
  return true;
};

