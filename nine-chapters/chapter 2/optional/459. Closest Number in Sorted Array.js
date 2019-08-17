// // lint code CI fail
// // same as 460 - 658
// const closestNumber = function (A, target) {
//   let left = findLastNumSmallerThanTarget(A, target);
//   let right = left + 1;
//   if (isLeftCloser((A, left, right, target))) {
//     return left;
//   } else {
//     return right;
//   }
// }
//
// const isLeftCloser = (A, left, right, target) => {
//   if (left < 0) {
//     return false;
//   }
//   if (right >= A.length) {
//     return true;
//   }
//   return target - A[left] <= A[right] - target;
// }
//
// const findLastNumSmallerThanTarget = (A, target) => {
//   let start = 0;
//   let end = A.length - 1;
//   while (start + 1 < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (A[mid] < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//   if (A[end] < target) {
//     return end;
//   }
//   if (A[start] < target) {
//     return start;
//   }
//   return -1;
// }
//
// console.log(closestNumber([1, 6, 6], 5));
const findLastNumSmallerThanTarget = (A, target) => {
  let start = 0;
  let end = A.length - 1;
  let targetRow;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] < target) {
      start = mid;
    } else if (A[mid] === target) {
     return true;
    } else {
      end = mid;
    }
  }

  if (A[start] < target) {
    targetRow = start;
    console.log("targetRow 1=====>", targetRow);
  } else if (A[end] < target) {
    targetRow = end;
    console.log("targetRow 2====>", targetRow);
  } else {
    return false;
  }

}

console.log(findLastNumSmallerThanTarget([1], 2));
