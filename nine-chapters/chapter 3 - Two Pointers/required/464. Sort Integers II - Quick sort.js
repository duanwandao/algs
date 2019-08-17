const sortIntegers2 = function (A) {
  quickSort(A, 0, A.length - 1);
}

const quickSort = (A, start, end) => {
  if (start >= end)   return;
  let left = start;
  let right = end;
  let pivot = A[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (left <= right && A[left] < pivot) {
      left ++;
    }
    while (left <=  right && A[right] > pivot) {
      right --;
    }

    if (left <= right) {
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left ++;
      right --;
    }
  }
  quickSort(A, start, right);
  quickSort(A, left, end);
}

