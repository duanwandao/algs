const kClosestNumbers = function (A, target, k) {
  let left = findLastNumSmallerThanTarget(A, target);
  let right = left + 1;
  const res = [];
  for (let i = 0; i < k; i ++) {
    if (isLeftCloser(A, left, right, target)) {
      res.push(A[left]);
      left --;
    } else {
      res.push(A[right]);
      right ++;
    }
  }
  return res.sort((a, b) => a - b); //leetcode needs to sort
}

// find first position of target template
const findLastNumSmallerThanTarget = (A, target) => {
  let start = 0;
  let end = A.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (A[start] < target) {
    return start;
  }

  if (A[end] < target) {
    return end;
  }

  return -1;
}

const isLeftCloser = (A, left, right, target) => {
  if (left < 0) {
    return false;
  }
  if (right >= A.length) {
    return true;
  }
  return target - A[left] <= A[right] - target;
}

const arr = [0,1,2,2,5,5,7,9,11,11,13,16,16,17,17,17,17,20,21,21,22,23,25,30,30,31,32,32,32,34,34,38,38,39,39,41,41,42,43,44,46,47,48,48,48,49,50,52,54,54,57,57,58,59,59,60,61,63,63,63,63,64,64,64,67,68,71,72,72,73,75,76,76,77,78,78,79,83,83,83,83,84,85,86,90,91,92,93,93,94,96,96,96,97,98,98,98,98,98,99];
const k = 94;
const target = 47;

console.log(kClosestNumbers(arr, target, k));
