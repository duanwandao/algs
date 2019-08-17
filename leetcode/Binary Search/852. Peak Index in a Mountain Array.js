// Let's call an array A a mountain if the following properties hold:
//
//    1. A.length >= 3
//    2. There exists some 0 < i < A.length - 1 such that
//       A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
//
// Given an array that is definitely a mountain, return any i such that
// A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:
//
// Input: [0,1,0]
// Output: 1

var peakIndexInMountainArray = function(A) {
  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
      return mid;
    } else if (A[mid] < A[mid + 1]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (A[start] > A[end]) {
    return start;
  } else {
    return end;
  }
};
