// A peak element is an element that is greater than its neighbors.
//
//   Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//
//   The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
//   You may imagine that nums[-1] = nums[n] = -∞.
//
//
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

var findPeakElement = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while(start + 1 <  end) {
    mid = Math.floor((start + end) / 2);

    if(nums[mid] > nums[mid - 1]) { // 上坡， 也可以写 >=
      start = mid;
    } else {  //下坡
      end = mid;
    }
  }

  if(nums[start] < nums[end]) {  // <=
    return end;
  } else {
    return start;
  }
};
