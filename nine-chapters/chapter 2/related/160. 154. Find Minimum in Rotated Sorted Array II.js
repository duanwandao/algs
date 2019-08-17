
const findMin = function (nums) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  //数组中最后一个数设为target
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] === nums[end]) {
      end --;   //I 中写 end = mid;
      start = mid;
    }
  }

  if (nums[start] <= nums[end]) {
    return nums[start];
  }
  return nums[end];
}

