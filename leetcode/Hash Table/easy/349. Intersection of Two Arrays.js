const intersection1 = function (nums1, nums2) {
  const nums1Map = nums1.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const set = nums2.reduce((set, num) => {
    if (nums1Map[num] > 0) {
      set.add(num);
      nums1Map[num] = nums1Map[num] - 1;
    }
    return set
  }, new Set());

  return [...set];
};

// space O(1)
// sort, then merge, use merge two sorted arrays template

const intersection2 = function (nums1, nums2) {
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a - b);
  let i = 0;
  let j = 0;
  let index = 0;
  const res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (index === 0 || res[index - 1] !== nums1[i]) {
        res[index] = nums1[i];
        index ++;
      }
      i ++;
      j ++;
    } else if (nums1[i] < nums2[j]) {
      i ++;
    } else {
      j ++;
    }
  }
  return res;
}

console.log(intersection1([4, 4, 5], [9,4,4,8,4]));

