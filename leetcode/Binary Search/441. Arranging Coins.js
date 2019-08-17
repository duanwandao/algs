// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
//
//   Given n, find the total number of full staircase rows that can be formed.
//
//   n is a non-negative integer and fits within the range of a 32-bit signed integer.
//
//   Example 1:
//
// n = 5
//
// The coins can form the following rows:
//   ¤
// ¤ ¤
// ¤ ¤
//
// Because the 3rd row is incomplete, we return 2.

var arrangeCoins = function(n) {
  let start = 1;
  let end = n;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if ((1 + mid) * mid / 2 === n ) {
      return mid;
    } else if ((1 + mid) * mid / 2 < n ) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if ((1 + start) * start / 2 <= n) {
    return start;
  }
  if ((1 + end) * end / 2 <= n) {
    return end;
  }
};
arrangeCoins(0);
