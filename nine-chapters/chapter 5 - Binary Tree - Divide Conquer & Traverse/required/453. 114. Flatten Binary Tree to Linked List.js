// Divide & Conquer ？？？？？？？？？？？？？？？？？？
const flatten = function (root) {
  if (root === null) {
    return null;
  }

  const left_last = flatten(root.left);
  const right_last = flatten(root.right);

  //左子树的最后一个点的右指针指到root右边的点，root右指针指到root的左边的点，root左指针指空
  if (left_last !== null) {
    left_last.right = root.right;
    root.right = root.left;
    root.left = null;
  }

  //先检查right
  if (right_last !== null) {
    return right_last;
  }

  if (left_last !== null) {
    return left_last;
  }
  return root;
}


//https://www.youtube.com/watch?v=NHdrzNpt1ZI
const flatten = function (root) {
  if (root === null) {
    return null;
  }

  flatten(root.left);
  flatten(root.right);

  if (!root.left) {
    return null;
  }

  let node = root.left;
  //找到左结点的最右叶子
  while (node.right) {
    node = node.right;
  }

  node.right = root.right;
  root.right = root.left;
  root.left = null;
}


// iteration !!!

const flatten = function (root) {
  if (root === null) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const currNode = stack.pop();
    if (currNode.right) {
      stack.push(currNode.right);
    }
    if (currNode.left) {
      stack.push(currNode.left);
    }

    // 把1连上了2
    if (stack.length) {
      currNode.right = stack[stack.length - 1];  //js has no stack.peak()
    }
    currNode.left = null;
  }
}
