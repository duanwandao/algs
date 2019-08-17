

const median = function (nums) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  //最后一个参数是指第k小的数的下标
  return partition(nums, 0, nums.length - 1, Math.floor((nums.length - 1) / 2));

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


console.log(median([4,5,1,2,3]));
