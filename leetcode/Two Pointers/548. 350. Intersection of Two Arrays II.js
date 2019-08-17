// Given two arrays, write a function to compute their intersection.
//
//   Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:
//
//   Each element in the result should appear as many times as it shows in both arrays.
//   The result can be in any order.


//用map维护前一个数组中每个值出现的次数
//然后遍历第二个数组，对于每个遍历到的数，在map中将这个数出现的次数-1
var intersect1 = function(nums1, nums2) {
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


console.log(intersect1([4,9,8,5], [9,4,9,8,4]));



// since the result can be in any order, so we can sort them, then use two pointers same as 340
var intersect2 = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let index = 0;
  const res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res[index] = nums1[i];
      index ++;
      i ++;
      j ++;
    } else if (nums1[i] < nums2[j]) {
      i ++;
    } else {
      j ++;
    }
  }
  return res;
};

console.log(intersect2([4,9,8,5], [9,4,9,8,4]));
