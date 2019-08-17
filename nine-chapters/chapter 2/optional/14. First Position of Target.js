
// classical binary search
const firstPositionOfTarget = function (nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else if (nums[mid] === target) {
      end = mid;
    } else {
      end = mid;
    }
  }

  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }
  return -1;
}


firstPositionOfTarget([1,1,2,2,2,4,5,5], 1);

