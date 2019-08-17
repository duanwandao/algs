// root, left, right

var preorderTraversal = function(root) {
  const res = [];
  traverse(root, res);
  return res;
};

const traverse = (root, res) => {
  if (!root) return;
  res.push(root.val);
  if (root.left) traverse(root.left, res);
  if (root.right) traverse(root.right, res);
}


var preorderTraversal = function(root) {
  if(!root) return [];

  const stack = [root]
  const result = [];

  while(stack.length) {
    const node = stack.pop();
    result.push(node.val);
    //注意先right 后 left，stack是先进后出， 下一次循环就是left先pop出来。
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};


