var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }

  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const level = [];
    const size = queue.length;

    for (let i = 0; i < size; i ++) {
      const node = queue.shift();

      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.unshift(level);
  }
  return res;
};
