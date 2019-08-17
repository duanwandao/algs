/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// Follow up for Search in Rotated Sorted Array:
//
//   What if duplicates are allowed?
//
//   Would this affect the run-time complexity? How and why?
//
//   Write a function to determine if a given target is in the array.


// Binary Search, the worst case is O(n).
var search = function(A, target) {
  if (!A || A.length === 0) {
    return false;
  }

  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) {
      return true;
    }
    //判断mid线的位置的方法是与start比较大小
    else if (A[start] < A[mid]) {    //判断mid线的位置，在上斜线上。
      if (A[start] <= target && target <= A[mid]) {  //target在mid线左侧, 注意等号
        end = mid;
      } else {
        start = mid;
      }
    } else if (A[mid] < A[end]) {        //判断mid线的位置，在下斜线上。
      if (A[mid] <= target && target <= A[end]) {     //target在mid线右侧，注意等号
        start = mid;
      } else {
        end = mid;
      }
      //单独处理等号情况, 与 I 比较就是多了这两个else if
    } else if (A[start] === A[mid]) {
      start ++;
    } else if (A[end] === A[mid]) {
      end --;
    }
  }

  if (A[start] === target) {
    return true;
  }
  if (A[end] === target) {
    return true;
  }
  return false;
};
