// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// https://leetcode.com/problems/search-in-rotated-sorted-array/


const search = function (A, target) {
  if (!A || A.length === 0) {
    return -1;
  }

  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) {
      return mid;
    }
    //判断mid线的位置的方法是与start比较大小
    if (A[start] < A[mid]) {    //判断mid线的位置，在上斜线上, 可以写 <=
      if (A[start] <= target && target <= A[mid]) {  //target在mid线左侧, 注意等号
        end = mid;
      } else {
        start = mid;
      }
    } else {        //判断mid线的位置，在下斜线上。
      if (A[mid] <= target && target <= A[end]) {     //target在mid线右侧，注意等号
        start = mid;
      } else {
        end = mid;
      }
    }
  }

  if (A[start] === target) {
    return start;
  }
  if (A[end] === target) {
    return end;
  }
  return -1;
}







// Solution 2:
//找到最小数的下标 （lintcode 159），再判断target是在左右哪个区间，再二分法
const search = function (A, target) {
  if (!A || A.length === 0) {
    return -1;
  }
  const minIndex = findMinIndex(A);
  if (A[minIndex] <= target && target <= A[A.length - 1]) {  //右区间
    return binarySearch(A, minIndex, A.length - 1, target);
  } else {
    return binarySearch(A, 0, minIndex - 1, target);
  }
}

const findMinIndex = (A) => {
  let start = 0;
  let end = A.length - 1;
  let target = A[end];

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] <= target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (A[start] <= target) {
    return start;
  }
  return end;
}

const binarySearch = (A, start, end, target) => {
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) {
      return mid;
    } else if (A[mid] < target){
      start = mid;
    } else {
      end = mid;
    }
  }
  if (A[start] === target) {
    return start;
  }
  if (A[end] === target) {
    return end;
  }
  return -1;
}

