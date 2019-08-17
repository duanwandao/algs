// Implement int sqrt(int x).
//
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
//
//   Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.


var mySqrt = function(x) {
  let start = 1;
  let end = x;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (start * start <= x) {
    return start;
  }
  if (end * end <= x) {
    return end;
  }
};



