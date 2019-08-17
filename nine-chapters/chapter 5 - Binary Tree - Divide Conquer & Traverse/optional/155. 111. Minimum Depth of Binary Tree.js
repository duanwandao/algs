var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  let left = minDepth(root.left);
  let right = minDepth(root.right);

  if (left && right) {
    return Math.min(left, right) + 1;
  } else if (left && !right) {
    return left + 1;
  } else {
    return right + 1;
  }
};
