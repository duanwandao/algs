// Given an array nums sorted in non-decreasing order, and a number target,
// return True if and only if target is a majority element.
//
//   A majority element is an element that appears more than N/2 times in an array of length N.
//
// Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
// Output: true
// Explanation:
//   The value 5 appears 5 times and the length of the array is 9.
// Thus, 5 is a majority element because 5 > 9/2 is true.

// same as leetcode 34. search for a range
// var isMajorityElement = function(nums, target) {
//   let start = 0;
//   let end = nums.length - 1;
//   let left = -10;
//   let right = -100;
//
//   while (start + 1 < end) {
//     let mid = Math.floor((start + end) / 2);
//
//     if (nums[mid] === target) {
//       end = mid;
//     } else if (nums[mid] < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//   if (nums[start] === target) {
//     left = start;
//   } else if (nums[end] === target) {
//     left = end;
//   }
//
//   start = 0;
//   end = nums.length - 1;
//
//   while (start + 1 < end) {
//     let mid = Math.floor((start + end) / 2);
//
//     if (nums[mid] === target) {
//       start = mid;
//     } else if (nums[mid] < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//   if (nums[end] === target) {
//     right = end;
//   } else if (nums[start] === target) {
//     right = start;
//   }
//
//   return right - left + 1 > nums.length / 2;
// };



var isMajorityElement = function(nums, target) {
  const start = nums.indexOf(target);
  let end = start;

  if (start >= 0) {
    while (nums[end] === target) {
      end ++;
    }
    return end - start > nums.length / 2;
  } else {
    return false;
  }
};

console.log(isMajorityElement([10,100,101,101], 101));
