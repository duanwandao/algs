// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
//   Your algorithm should run in O(n) complexity.

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// 数字全放到set里
// 找上下边界

var longestConsecutive = function(nums) {
  const set = new Set(nums);

  let longest = 0;
  for (let num of nums) {
    let up = num + 1;
    let down = num - 1;

    while (set.has(down)) {
      set.delete(down);
      down --;
    }

    while (set.has(up)) {
      set.delete(up);
      up ++;
    }
    longest = Math.max(longest, up - down - 1);
  }
  return longest;

};
