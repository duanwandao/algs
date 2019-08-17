// 非递归的版本
// 算法很简单，求出 lowerBound 和 upperBound。即 < target 的最大值和 >= target 的最小值。
// 然后在两者之中去比较谁更接近，然后返回即可。
//
// 时间复杂度为 O(h)O(h)，注意如果你使用 in-order traversal 的化，时间复杂度会是 o(n)o(n) 并不是最优的。
// 另外复杂度也不是 O(logn)O(logn) 因为BST 并不保证树高是 logn 的。

const closestValue = function (root, target) {
  let lower = root;
  let upper = root;

  while (root) {
    if (target < root.val) {
      upper = root;
      root = root.left;
    } else if (target > root.val) {
      lower = root;
      root = root.right;
    }else {
      return root.val;
    }
  }
  if (Math.abs(target - lower.val) > Math.abs(target - upper.val)) {
    return upper.val;
  } else {
    return lower.val;
  }
}

