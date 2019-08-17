const twoSumClosest = function (nums, target) {
  nums.sort((a, b) => a -  b);
  let left = 0;
  let right = nums.length - 1;
  let min = Number.MAX_SAFE_INTEGER;
  let diff;

  while (left < right) {
    if (nums[left] + nums[right] > target) {
      diff = Math.abs(nums[left] + nums[right] - target);
      min = Math.min(min, diff);
      right --;
    } else {
      diff = Math.abs(nums[left] + nums[right] - target);
      min = Math.min(min, diff);
      left ++;
    }
  }
  return min;
}
