//1. 从右往左遍历数组nums，直到找到一个位置i，满足nums[i] > nums[i - 1]或者i为0。
//2. 翻转从i开始到最后所有数
//3. i不为0时，设j = i，从左到右遍历，寻找第一个nums[j] > nums[i - 1]。
//4. 交换nums[j], nums[i-1]

//2, 4, 3, 1
//1. 找到nums[i] > nums[i - 1] 即 4 > 2
//2. 翻转4, 3, 1 => 1, 3, 4  nums =  2, 1, 3, 4
//3. 找到nums[j] > nums[i - 1] 找到1,3,4中第一个比2大的数 即 3.
//4. 调换2, 3 => 3, 1, 2, 4

const nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let i = nums.length - 1;
  //1
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i --;
  }
  //2
  reverse(nums, i, nums.length - 1);

  if (i !== 0) {
    //3
    let j = i;
    while (nums[j] <= nums[i - 1]) {
      j ++;
    }

    //4
    swap(nums, j, i - 1);
  }
  return nums;
}

const reverse = (nums, left , right) => {
  while (left < right) {
    swap(nums, left, right);
    left ++;
    right --;
  }
}

const swap = (nums, left, right) => {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}
