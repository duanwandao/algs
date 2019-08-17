// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
//   Note: Do not use any built-in library function such as sqrt.
//
//   Example 1:
//
// Input: 16
// Output: true


// similar as 367, 441
var isPerfectSquare = function(num) {
  let start = 1;
  let end = num;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (start * start === num) {
    return true;
  } else if (end * end === num) {
    return true;
  }
  return false;
};


isPerfectSquare(0);
