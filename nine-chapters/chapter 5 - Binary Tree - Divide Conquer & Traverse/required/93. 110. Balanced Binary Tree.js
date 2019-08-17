


const isBalanced = function (root) {
  return maxDepth(root) !== -1;
}

const maxDepth = (root) => {
  const NOT_BALENCED = -1;
  if (!root) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  if (left === NOT_BALENCED || right === NOT_BALENCED) {
    return NOT_BALENCED;
  }
  if (Math.abs(left - right) > 1) {
    return NOT_BALENCED;
  }
  return Math.max(left, right) + 1;
}
