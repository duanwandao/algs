// Write an efficient algorithm that searches for a value in an m x n matrix, return the occurrence of it.
//
//   This matrix has the following properties:
//
//   Integers in each row are sorted from left to right.
//   Integers in each column are sorted from up to bottom.
//   No duplicate integers in each row or column.
//
//   Input:
// [
//   [1, 3, 5, 7],
//   [2, 4, 7, 8],
//   [3, 5, 9, 10]
// ]
// target = 3
// Output:2

const searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }
  if (!matrix[0] || matrix[0].length === 0) {
    return 0;
  }
  let count = 0;
  let x = 0;
  let y = matrix[0].length - 1;
  let row = matrix.length - 1;

  while (y >= 0 && x <= row) {
    if (matrix[x][y] === target) {    //右上角数 = target， 去下一行，左边一列继续找
      count ++;
      x ++;
      y --;
    } else if (matrix[x][y] < target) { //右上角数 < target， 去下一行继续找
      x ++;
    } else { //右上角数 > target， 去左边一列继续找
      y --;
    }
  }
  return count;
}
