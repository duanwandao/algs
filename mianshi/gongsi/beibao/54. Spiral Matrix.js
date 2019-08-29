// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
//
// Input:
//   [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//   ]
// Output: [1,2,3,6,9,8,7,4,5]


//考虑2个初始条件，如果矩阵只有一行或者一列，那么无需转圈，依次输出即可。
//其他情况均需转圈：从左到右，从上到下，从右到左，从下到上。 从大圈依次循环到小圈即可。

var spiralOrder = function(matrix) {
  const res = [];
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return res;
  }

  let m = matrix.length;
  let n = matrix[0].length;
  let x = 0;
  let y = 0;

  while (m > 0 && n > 0) {
    //only one row
    if (m === 1) {
      for (let i = 0; i < n; i ++) {
        res.push(matrix[x][y ++]);
      }
      break;
    }

    // only one column
    if (n === 1) {
      for (let i = 0; i < m; i ++) {
        res.push(matrix[x ++][y]);
      }
      break;
    }

    // circle
    // top - move right
    for (let i = 0; i < n - 1; i ++) {
      res.push(matrix[x][y ++]);
    }

    // left - move down
    for (let i = 0; i < m - 1; i ++) {
      res.push(matrix[x ++][y]);
    }

    // bottom - move left
    for (let i = 0; i < n - 1; i ++) {
      res.push(matrix[x][y --]);
    }

    //right - move up
    for (let i = 0; i < m - 1; i ++) {
      res.push(matrix[x --][y]);
    }

    x ++;
    y ++;
    m -= 2;
    n -= 2;
  }

  return res;


};
