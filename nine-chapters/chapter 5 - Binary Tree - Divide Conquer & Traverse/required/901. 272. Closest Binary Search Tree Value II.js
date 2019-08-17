//暴力方法。时间复杂度 O(n)O(n)，空间复杂度也是 O(n)O(n)

// 先用 inorder traversal 求出中序遍历
// 找到第一个 >= target 的位置 index
// 从 index-1 和 index 出发，设置两根指针一左一右，获得最近的 k 个整数

var closestKValues = function(root, target, k) {
  const values = inorder(root, []);
  let index = values.length;
  const res = [];

  for (let i = 0; i < values.length; i ++) {
    if (values[i] >= target) {
      index = i;
      break;
    }
  }

  if (index === values.length) {
    for (let i = 0; i < k; i ++) {
      res.push(values[values.length - k + i]);
    }
    return res;
  }

  let left = index - 1;
  let right = index;

  for (let i = 0; i < k; i ++) {
    if (left >= 0 && (right >= values.length || target - values[left] < values[right] - target)) {
      res.push(values[left]);
      left --;
    } else {
      res.push(values[right]);
      right ++;
    }
  }
  return res;


};

const inorder = (root, values) => {
  if (!root) {
    return;
  }

  inorder(root.left, values);
  values.push(root.val);
  inorder(root.right, values);
  return values;

}
