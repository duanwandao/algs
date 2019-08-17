//用map维护前一个数组中每个值出现的次数
//然后遍历第二个数组，对于每个遍历到的数，在map中将这个数出现的次数-1
var intersect = function(nums1, nums2) {
  const map = new Map();
  const res = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  };

  for (const num of nums2) {
    if (map.get(num) > 0) {
      res.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return res;
};
