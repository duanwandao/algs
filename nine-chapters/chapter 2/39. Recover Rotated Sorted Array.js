const recoverRotatedSortedArray = function (nums) {
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > nums[i + 1]) {
      let index = i;
      reverse(nums, 0, index);
      reverse(nums, index + 1, nums.length - 1);
      reverse(nums, 0, nums.length - 1);
    }
  }
}
const reverse = (nums, start, end) => {
  for (let i = start, j = end; i < j; i ++, j --) {
    let temp;
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return nums;
}
