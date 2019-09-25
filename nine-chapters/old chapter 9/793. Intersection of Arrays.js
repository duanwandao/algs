//map记录每个数出现的次数，循环遍历map，value值和arrs.length相等表示在每个集合中都出现过，即是交集中的元素

const intersectionOfArrays = function (arrs) {
  const map = new Map();
  let res = 0;
  const len = arrs.length;

  for (const nums of arrs) {
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  for (const i of map.values()) {
    if (i === len) {
      res ++;
    }
  }
  return res;

}
