//找到first和last
const totalOccurrence = function (A, target) {
  if (!A || A.length === 0) {
    return 0;
  }

  let start = 0;
  let end = A.length - 1;
  let first = -1;
  let last = -1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) {
      end = mid;
    } else if (A[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (A[start] === target) {
    first = start;
  } else if (A[end] === target) {
    first = end;
  }

  start = 0;
  end = A.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === target) {
      start = mid;
    } else if (A[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (A[end] === target) {
    last = end;
  } else if (A[start] === target) {
    last = start;
  }

  return (first !== -1 && last !== -1) ? last - first + 1 : 0;
}


//找到first，把first往后挪，统计重复数字的个数
const totalOccurrence = function (A, target) {
  let start = 0;
  let end = A.length - 1;
  let mid;
  let first;

  while (start + 1 < end) {
    mid = Math.floor((start + end) / 2);
    if (A[mid] < target) {
      start = mid;
    } else if (A[mid] > target) {
      end = mid;
    } else {
      end = mid;
    }
  }

  if (A[start] === target) {
    first = start;
  } else if (A[end] === target) {
    first = end;
  } else {
    first = -1;
  }
  let count = 0;
  if (first !== -1) {
    count ++;
    while (first !== A.length && A[first] === A[first + 1]) {
      first ++;
      count ++;
    }
  }
  return count;
}
