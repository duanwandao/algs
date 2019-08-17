const mergeSortedArray = function (A, B) {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      res.push(A[i ++]);
    } else {
      res.push(B[j ++]);
    }
  }

  while (i < A.length) {
    res.push(A[i ++]);
  }
  while (j < B.length) {
    res.push(B[j ++]);
  }
  return res;
}

