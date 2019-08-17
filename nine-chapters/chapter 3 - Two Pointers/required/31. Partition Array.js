// Given an array nums of integers and an int k,
// partition the array (i.e move the elements in "nums") such that:
//
//   All elements < k are moved to the left
//   All elements >= k are moved to the right
// Return the partitioning index, i.e the first index i nums[i] >= k.

const partitionArray = function (nums, k) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    while (left <= right && nums[left] < k) {
      left ++;
    }
    while (left <= right && nums[right] >= k) {
      right --;
    }
    if (left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left ++;
      right --;
    }
  }
  return left;
}
