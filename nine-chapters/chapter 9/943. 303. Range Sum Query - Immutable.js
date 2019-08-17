//    [-2, 0, 3, -5, 2, -1]
// [0, -2, -2, 1, -4, -2, -3]

// var NumArray = function(nums) {
//   this.prefixSum = [0];
//   for (let i = 1; i <= nums.length; i ++) {
//     this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
//   }
// };

var NumArray = function(nums) {
  let sum = 0;
  this.prefixSum = nums.map(num => sum += num);
  this.prefixSum.unshift(0);
};

NumArray.prototype.sumRange = function(i, j) {
  return this.prefixSum[j + 1] - this.prefixSum[i];
};


NumArray([-2, 0, 3, -5, 2, -1])
