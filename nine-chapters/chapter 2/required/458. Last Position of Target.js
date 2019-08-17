const lastPosition = function (nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else if (nums[mid] === target) {
      start = mid;  //not end = mid;
    } else {
      end = mid;
    }
  }

  // switch two if, check end first.
  if (nums[end] === target) {
    return end;
  }
  if (nums[start] === target) {
    return start;
  }

  return -1;
}
