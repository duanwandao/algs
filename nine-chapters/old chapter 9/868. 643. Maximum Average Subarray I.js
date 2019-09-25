// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value



var findMaxAverage = function(nums, k) {
  const prefixSum = [];
  prefixSum[0] = 0;

  for (let i = 1; i <= nums.length; i ++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  let res = Number.MIN_SAFE_INTEGER;
  for (let i = k; i <= nums.length; i ++) {
    res = Math.max(res, prefixSum[i] - prefixSum[i - k]);
  }
  return res / k;
};

findMaxAverage([1,12,-5,-6,50,3], 4);
