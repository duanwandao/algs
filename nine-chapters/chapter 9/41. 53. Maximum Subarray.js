//prefixSum = A[0] + A[1] + ... + A[i - 1].
//prefixSum[0] = 0;
// 下标i - j的所有数之和
//Sum(i ~ j) = prefixSum[j + 1] - prefixSum[i]

var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;  //!!!
  let sum = 0;
  let minSum = 0;

  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    max = Math.max(max, sum - minSum);
    minSum = Math.min(sum, minSum);
  }
  return max;
};

console.log(maxSubArray([-1]));

console.log(Math.max(Number.MIN_SAFE_INTEGER, -1));

