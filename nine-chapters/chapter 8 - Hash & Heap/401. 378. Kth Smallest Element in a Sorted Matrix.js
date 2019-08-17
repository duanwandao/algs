// binary search
// 1
var kthSmallest = function(matrix, k) {
  const n = matrix.length;
  const m = matrix[0].length;

  let start = matrix[0][0];
  let end = matrix[n - 1][m - 1];

  while (start < end) {
    let count = 0;
    let j = m - 1;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < n; i ++) {

      while (matrix[i][j] > mid) {
        j --;
      }

      count = count + j + 1;
    }
    if (count < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};


// 2
var kthSmallest = function(matrix, k) {
  const n = matrix.length;
  const m = matrix[0].length;

  let start = matrix[0][0];
  let end = matrix[n - 1][m - 1];

  while (start <= end) {
    let count = 0;
    let j = m - 1;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < n; i ++) {

      while (matrix[i][j] > mid) {
        j --;
      }

      count = count + j + 1;
    }
    if (count < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};
