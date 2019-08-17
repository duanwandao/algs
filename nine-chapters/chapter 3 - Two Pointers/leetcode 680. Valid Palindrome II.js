var validPalindrome = function(s) {
  if (!s || s.length === 0) {
    return false;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      break;
    }
    left ++;
    right --;
  }
  if (left >= right) {
    return true;
  }
  return isSubPalindrome(s, left + 1, right) || isSubPalindrome(s, left, right - 1);
};
const isSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left ++;
    right --;
  }
  return true;
}
