
let res = "";
const longestPalindrome = function (s) {
  if (s === "") {
    return ""
  }
  for (let i = 0; i < s.length; i ++) {
    helper(s, i, i);
    helper(s, i, i + 1);
  }
  return res;
}

const helper = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left --;
    right ++;
  }
  const curr = s.substring(left + 1, right);
  if (curr.length > res.length) {
    res = curr;
  }
} 
