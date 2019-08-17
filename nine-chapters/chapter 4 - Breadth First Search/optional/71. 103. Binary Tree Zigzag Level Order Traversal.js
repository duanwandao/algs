var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const queue = [];
  queue.push(root);
  let level = 1;

  while (queue.length) {
    const levelRes = [];
    const size = queue.length;

    for (let i = 0; i < size; i ++) {
      const node = queue.shift();
      if (level % 2 === 1) {
        levelRes.push(node.val);
      } else {
        levelRes.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level ++;
    res.push(levelRes);
  }
  return res;

};
