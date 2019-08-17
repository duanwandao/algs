
//BFS level order
const serialize = (root) => {
  const res = [];

  if (!root) {
    return res;
  }

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (!current) {
      res.push(null);
      continue;
    }

    res.push(current.val);

//左右子树可能为null，push 进queue，上面的if就起作用了
    queue.push(current.left);
    queue.push(current.right);
  }

  return res;
}


// data [1,2,3,null,null,4,5]

// after 1st round
// data [null, null, 4, 5]
// queue [2, 3]
//
// after 2nd round
// data [4, 5]
// queue [3]

const deserialize = (data) => {
  if (!data.length) {
    return null;
  }

  const head = new TreeNode(data.shift());   // 1
  const queue = [head];

  while (queue.length) {
    const current = queue.shift();    // 2
    const left = data.shift();        // null
    const right = data.shift();       // null

    current.left = left === null ? null : new TreeNode(left);   //2没有左右子树 都是null
    current.right = right === null ? null : new TreeNode(right);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return head;
}
















