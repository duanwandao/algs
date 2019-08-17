// Given a list of sorted characters letters containing only lowercase letters,
// and given a target letter target, find the smallest element in the list that is larger than the given target.
//
//   Letters also wrap around. For example,
//   if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
//
//   Input:
//   letters = ["c", "f", "j"]
//   target = "a"
//   Output: "c"



// find first number greater than target template, see important.js
var nextGreatestLetter = function(letters, target) {
  if (letters[letters.length - 1] <= target) {
    return letters[0];
  }

  let start = 0;
  let end = letters.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (letters[mid] === target) {
      start = mid;
    } else if (letters[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (letters[start] > target) {
    return start;
  }
  if (letters[end] > target) {
    return end;
  }
};

const letters = [1,1,1,1,2,2,4,4,4,5, 7]
console.log(nextGreatestLetter(letters, 6));

