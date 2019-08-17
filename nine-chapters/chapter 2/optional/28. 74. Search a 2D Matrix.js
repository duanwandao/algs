// // Write an efficient algorithm that searches for a value in an m x n matrix.
// // This matrix has the following properties:
// //
// //   Integers in each row are sorted from left to right.
// //   The first integer of each row is greater than the last integer of the previous row.
//
// //2D矩阵转换成1D
// // position: 0   1   2   3   4   5   6   7   8   9   10   11
// //
// // values:   1   3   5   7   10  11  16  20  23  30  34   50
// //
// // row:      0   0   0   0   1   1   1   1   2   2    2    2
// //
// // column:   0   1   2   3   0   1   2   3   0   1    2    3
//
// //行数是position/column，而列数是position%column
//
//
// const searchMatrix = function (matrix, target) {
//   if (!matrix || !matrix[0] || matrix.length === 0 || matrix[0].length === 0) {
//     return false;
//   }
//
//   let row = matrix.length;
//   let column = matrix[0].length;
//   let start = 0;
//   let end = row * column - 1;
//
//   while (start + 1 < end) {
//     let mid = Math.floor((start + end) / 2);
//     let number = matrix[Math.floor(mid / column)][mid % column];
//     if (number === target) {
//       return true;
//     } else if (number < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//
//   if (matrix[Math.floor(start / column)][start % column] === target) {
//     return true
//   }
//   if (matrix[Math.floor(end / column)][end % column] === target) {
//     return true
//   }
//   return false;
// }


//
/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */

const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix[0] || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let row = matrix.length;
  let column = matrix[0].length;
  let start = 0;
  let end = row - 1;
  let targetRow = 0;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (matrix[mid][0] === target) {
      return true;
    } else if (matrix[mid][0] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  // ([[1], [3]], 3]) start=0, end=1, 先看end， targetRow=1，不会进入else if
  //  区别于findLastNumSmallerThanTarget
  if (matrix[end][0] <= target ) {
    targetRow = end;
  } else if (matrix[start][0] <= target ) {
    targetRow = start;
  } else {
    return false;
  }

  start = 0;
  end = column - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (matrix[targetRow][mid] === target) {
      return true;
    } else if (matrix[targetRow][mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (matrix[targetRow][start] === target) {
    return true;
  }
  if (matrix[targetRow][end] === target) {
    return true;
  }
  return false;
}

