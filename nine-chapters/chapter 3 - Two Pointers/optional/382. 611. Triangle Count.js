const triangleCount = function (S) {
  S.sort((a, b) => a - b);
  let res = 0;
  for (let i = 2; i < S.length; i ++) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (S[left] + S[right] > S[i]) {
        res += right - left;
        right --;
      } else {
        left ++;
      }
    }

  }
  return res;
}
