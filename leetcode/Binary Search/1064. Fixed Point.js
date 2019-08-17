// Given an array A of distinct integers sorted in ascending order,
// return the smallest index i that satisfies A[i] == i.  Return -1 if no such i exists.
//
//
// Input: [-10,-5,0,3,7]
// Output: 3
// Explanation:
//   For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.


var fixedPoint = function(A) {
  let start = 0;
  let end = A.length;

  while (start + 1 < end) {
    let mid = Math.floor((start + end ) / 2);

    if (A[mid] === mid) {
      end = mid;
    } else if (A[mid] > mid) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (A[start] === start) {
    return start;
  }
  if (A[end] === end) {
    return end;
  }
  return -1;
};
