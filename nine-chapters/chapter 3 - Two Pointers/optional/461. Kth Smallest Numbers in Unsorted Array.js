const kthSmallest = function (n, nums) {
  if (!nums || nums.length === 0 || n < 1 || n > nums.length) {
    return -1;
  }
  //与kth larget唯一不同的是，最后一个参数变成 n - 1, 即第n小的数的下标
  return partition(nums, 0, nums.length - 1, n - 1);

}

const partition = (nums, start, end, k) => {
  if (start >= end) {
    return nums[k];
  }

  let left = start;
  let right = end;
  let pivot = nums[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (left <= right && nums[left] < pivot) {
      left ++;
    }
    while (left <= right && nums[right] > pivot) {
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
  //      -----------------
  // start      r  l       end
  // k >= left， 表示要找的数在l - end
  // k <= right， 表示要找的数在start - r
  if (k >= left) {
    partition(nums, left, end, k);
  }
  if (k <= right) {
    partition(nums, start, right, k);
  }
  return nums[k];
}
