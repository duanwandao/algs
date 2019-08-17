// Given an array of integers A sorted in non-decreasing order,
// return an array of the squares of each number, also in sorted non-decreasing order.
//
//
//
//   Example 1:
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]



var sortedSquares = function(A) {
  const res = [];
  let right = A.length - 1;
  let left = 0;

  while (left <= right) {
    if (Math.abs(A[right]) < Math.abs(A[left])) {
      res.unshift(A[left] * A[left]);
      left ++;
    } else {
      res.unshift(A[right] * A[right]);
      right --;
    }
  }
  return res;
};
