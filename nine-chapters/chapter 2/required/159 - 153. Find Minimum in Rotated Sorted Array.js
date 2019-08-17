//The array may contain duplicates.

//找第一个比target小的数
const findMin = function (nums) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  //数组中最后一个数设为target
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] <  nums[end]) {
      end = mid;
    } else if (nums[mid] === nums[end]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (nums[start] <= nums[end]) {   // < 也可以
    return nums[start];
  }
  return nums[end];
}
