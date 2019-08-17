// Given an array of n integers, and a moving window(size k),
// move the window at each iteration from the start of the array,
// find the sum of the element inside the window at each moving.
//
// Input：array = [1,2,7,8,5], k = 3
// Output：[10,17,20]
// Explanation：
// 1 + 2 + 7 = 10
// 2 + 7 + 8 = 17
// 7 + 8 + 5 = 20

const winSum1 = function (nums, k) {
  if (!nums || nums.length === 0) {
    return [];
  }
  const res = [];
  let sum = 0;
  //计算nums的前k个数之和，赋值给sum[0]
  for (let i = 0; i < k; i ++) {
    sum += nums[i];
  }
  res.push(sum);

  // 减去头部元素，加上尾部元素
  for (let i = 1; i <= nums.length - k; i ++) {
    res.push(res[i - 1] - nums[i - 1] + nums[i -1 + k]);
  }
  return res;
}

console.log(winSum1([1,2,7,7,2,3,4], 3));




// Time Limit Exceeded
const winSum2 = function (nums, k) {
  if (!nums || nums.length === 0) {
    return [];
  }
  let left = 0;
  let right = k - 1;
  let res = [];
  while (right < nums.length) {
    let sum = 0;
    for (let i = left; i <= right; i ++) {
      sum += nums[i];
    }
    res.push(sum);
    right ++;
    left ++;
  }

  return res;
}
