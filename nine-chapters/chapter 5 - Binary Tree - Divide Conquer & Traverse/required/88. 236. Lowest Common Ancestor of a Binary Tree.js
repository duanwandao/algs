// 如果parent的左右孩子都有返回，说明parent就是LCA
// 如果左边没有返回：则右边返回的就是LCA
// 如果右边没有返回：则左边返回的就是LCA

var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  //divide
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // conquer
  if (left && right) {
    return root;
  }
  if (left) {
    return left;
  }
  if (right) {
    return right;
  }
  if (!left && !right) {
    return null;
  }
};


var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  //divide
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // conquer
  if (left && right) {
    return root;
  }
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
};


