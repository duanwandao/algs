

const binaryTreePaths = function (root) {
  const res = [];
  let path = "";
  traverse(root, path, res);
  return res;

}

const traverse = (node, path, res) => {
  if (!node) {
    return;
  }

  path += path === "" ? node.val : (`->${node.val}`);

  if (!node.left && !node.right) {
    res.push(path);
    return;
  }

  traverse(node.left, path, res);
  traverse(node.right, path, res);
}


