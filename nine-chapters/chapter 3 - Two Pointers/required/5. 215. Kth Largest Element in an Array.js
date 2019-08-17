//partition模板！！！
//数组里没重复元素
//如果有重复元素 如：[1,1,3,2,2], 第2大是2， 第3大也会返回2.

const findKthLargest = function (nums, n) {
  if (!nums || nums.length === 0 || n < 1 || n > nums.length) {
    return -1;
  }
  return partition(nums, 0, nums.length - 1, nums.length - n);
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
  return nums;
}


const nums = [2,1,3,4,8,6,5,7];
console.log(findKthLargest(nums, 2));

// var x = [1,2,2,1,1,3,4,4,8,8,6];
// var y = Array.from(new Set(x));
// var z = kthLargestElement(5, y);
// console.log(y);
// console.log(z);
