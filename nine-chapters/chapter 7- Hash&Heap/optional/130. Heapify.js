const heapify = (A) => {
  for (let i = 0; i < A.length; i ++) {
    siftup(A, i);
  }
}
const siftup = (A, k) => {
      while (k > 0) {
          let father = Math.floor((k - 1) / 2);
          if (A[k] > A[father]) {
              break;
          }
          let temp = A[k];
          A[k] = A[father];
          A[father] = temp;

          k = father;
      }
}
const a = [45,39,32,11];
heapify(a);
console.log(a);
