// Given n unique postive integers, number k (1<=k<=n) and target.
//
// Find all possible k integers where their sum is target.
//
//
// Example 1:
//
// Input: [1,2,3,4], k = 2, target = 5
// Output:  [[1,4],[2,3]]

const kSumII = (A, k, target) => {
  const result = [];
  helper(A, k, target, 0, [], result);
  return result;
}

const helper = (A, k, remainTarget, startIndex, combination, result) => {
  if (remainTarget === 0 && k === 0) {
    result.push([...combination]);
    return;
  }

  if (k === 0 || remainTarget <= 0) {
    return;
  }

  for (let i = startIndex; i < A.length; i ++) {
    combination.push(A[i]);
    helper(A, k - 1, remainTarget - A[i], i + 1, combination, result);
    combination.pop();
  }
}

console.log(kSumII([1,3,4,6], 3, 8));
