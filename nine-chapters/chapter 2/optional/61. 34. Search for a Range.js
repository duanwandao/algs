
var searchRange = function(nums, target) {
  if (!nums || nums.length === 0) {
    return [-1, -1];
  }
  let start = 0;
  let end = nums.length - 1;
  let left = -1;
  let right = -1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] === target) {
    left = start;
  } else if (nums[end] === target) {
    left = end;
  }

  start = 0;
  end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      start = mid;          //not end = mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[end] === target) {
    right = end;
  } else if (nums[start] === target) {
    right = start;
  }

  return [left, right];
};
