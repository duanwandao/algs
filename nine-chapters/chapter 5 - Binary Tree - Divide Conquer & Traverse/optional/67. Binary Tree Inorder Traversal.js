
// recursive helper function
var inorderTraversal = function(root) {
  const res = [];
  traverse(root, res);
  return res;
};

const traverse = (root, res) => {
  if (!root) return;
  if (root.left) traverse(root.left, res);
  res.push(root.val);
  if (root.right) traverse(root.right, res);
}

// recursive res as an argument
// var inorderTraversal = function(root, res = []) {
//     if (!root) {
//         return res;
//     }
//     inorderTraversal(root.left, res);
//     res.push(root.val);
//     inorderTraversal(root.right, res);
//     return res;
// }



//iteration  背诵！！！
const inorderTraversal = (root) => {
  if (!root) return [];

  const stack = [];
  const res = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }

  while (stack.length) {
    const currNode = stack.pop();

    res.push(currNode.val);

    let newNode = currNode.right;

    while (newNode) {
      stack.push(newNode);
      newNode = newNode.left;
    }
  }
  return res;
}
