// Partition an unsorted integer array into three parts:
//
// The front part < low
// The middle part >= low & <= high
// The tail part > high
// Return any of the possible solutions.


// version 1.
// 和 148. 75. Sort colors一个套路

const partitionA = function (nums, low, high) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  let temp;
  while (i <= right) {
      if (nums[i] < low) {
          temp = nums[i];
          nums[i] = nums[left];
          nums[left] = temp;
          i ++;
          left ++;
      } else if (nums[i] > high) {
          temp = nums[i];
          nums[i] = nums[right];
          nums[right] = temp;
          right --;
      } else {
            i++;
      }
  }
  return nums;
}


// version 2
const partitionB = function (nums, low, high) {
  let left = 0;
  let right = nums.length - 1;

  // 首先把区间分为 < low 和 >= low 的两个部分
  while(left <= right) {
    while(left <= right && nums[left] < low) {
      left ++;
    }
    while(left <= right && nums[right] >= low) {
      right --;
    }

    if(left <= right) {
      let tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;
      left ++;
      right --;
    }
  }

  // 然后从 >= low 的部分里分出 <= high 和 > high 的两个部分
  right = nums.length - 1;
  while(left <= right) {
    while(left <= right && nums[left] <= high) {
      left ++;
    }
    while(left <= right && nums[right] > high) {
      right --;
    }
    if(left <= right) {
      let tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;
      left ++;
      right --;
    }
  }
  return nums;
}

const nums = [4,3,4,1,2,3,1,2];

console.log(partitionA(nums, 2,3));
