// quick sort
const topk = function (nums, k) {
  quickSort(nums, 0, nums.length - 1);

  return nums.slice(0, k);
}

const quickSort = (nums, start, end) => {
  if (start >= end) {
    return;
  }

  let left = start;
  let right = end;
  let pivot = nums[Math.floor((start + end) / 2)];

  while (left <= right) {
    while (left <= right && nums[left] > pivot) {   //注意写>，这样数组就是从大到小排列
      left ++;
    }
    while (left <=  right && nums[right] < pivot) {
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
  quickSort(nums, start, right);
  quickSort(nums, left, end);
}

console.log(topk([4,3,1,2,7,6,5], 3));
