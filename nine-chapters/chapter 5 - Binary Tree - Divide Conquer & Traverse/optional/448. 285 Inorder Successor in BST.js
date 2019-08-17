// 1)If there is a right child to the node p, go to the right child, and after that keep on going left,
//   until there is a valid node.
// 2) If there is no right child start searching for node p from root, and overwrite the variable op, whenever you need to go towards the left subtree (i.e keep a track of the latest node which had bigger value than node p) and return that node. If no such node exists, then return null.


// 如果该节点有右子节点, 那么后继是其右子节点的子树中最左端的节点
// 如果该节点没有右子节点, 那么后继是离它最近的祖先, 该节点在这个祖先的左子树内.

  var inorderSuccessor = function(root, p) {

  if (root === null || p === null) {
    return null;
  }
  // 1)
  if (p.right) {
    let node = p.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  //2)
  let successor = null;
  while (root) {
    if (root.val > p.val) {
      successor = root;
      root = root.left;
    } else if (root.val < p.val) {
      root = root.right;
    } else {
      return successor;
    }
  }
};
