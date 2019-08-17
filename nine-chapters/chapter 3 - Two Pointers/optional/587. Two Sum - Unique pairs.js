// Given an array of integers, find how many unique pairs in the array such that their sum is equal to a specific target number. Please return the number of pairs.
//
// Input: nums = [1,1,2,45,46,46], target = 47
// Output: 2
// Explanation:
//
// 1 + 46 = 47
// 2 + 45 = 47

const twoSum6 = function (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let res = 0;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      left ++;
      right --;
      res ++;

      while (left < right && nums[left] === nums[left - 1]) {  //继续移动左指针，直到变成另外一个数字
        left ++;
      }
      while (left < right && nums[right] === nums[right + 1]) { //继续移动右指针，直到变成另外一个数字
        right --;
      }
    } else if (nums[left] + nums[right] < target) {
      left ++;
    } else {
      right --;
    }
  }
  return res;
}

twoSum6([-1,-2,-3,-4,-5,-6,-100,-98,-111,-11,-11,-108,-107,-106], -111);
