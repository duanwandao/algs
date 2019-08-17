
// https://www.jiuzhang.com/tutorial/algorithm/448

var findMedianSortedArrays = function(A, B) {
  let n = A.length + B.length;

  if (n % 2 === 0) {
    return (
      findKth(A, 0, B, 0, Math.floor(n / 2)) +
      findKth(A, 0, B, 0, Math.floor(n / 2) + 1)
    ) / 2;
  }

  return findKth(A, 0, B, 0, Math.floor(n / 2) + 1);
};

const findKth = (A, startOfA, B, startOfB, k) => {
  if (startOfA >= A.length) {
    return B[startOfB + k - 1];
  }
  if (startOfB >= B.length) {
    return A[startOfA + k - 1];
  }

  if (k === 1) {
    return Math.min(A[startOfA], B[startOfB]);
  }

  let halfKthOfA = startOfA + k / 2 - 1 < A.length
    ? A[startOfA + Math.floor(k / 2) - 1]
    : Number.MAX_VALUE;
  let halfKthOfB = startOfB + Math.floor(k / 2) - 1 < B.length
    ? B[startOfB + Math.floor(k / 2) - 1]
    : Number.MAX_VALUE;

  if (halfKthOfA < halfKthOfB) {
    return findKth(A, startOfA + Math.floor(k / 2), B, startOfB, k - Math.floor(k / 2));
  } else {
    return findKth(A, startOfA, B, startOfB + Math.floor(k / 2), k - Math.floor(k / 2));
  }
}
