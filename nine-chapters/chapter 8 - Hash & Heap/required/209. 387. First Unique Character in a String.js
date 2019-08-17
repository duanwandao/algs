// Find the first unique character in a given string.
// You can assume that there is at least one unique character in the string.
//
//
// Example 1:
// Input: "abaccdeff"
// Output:  'b'
//

const firstUniqChar = function (str) {
  const map = {};

  for (let i of str) {
    map[i] = map[i] ? map[i] + 1 : 1;
  }

  for (let key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
  return null;
}

console.log(firstUniqChar("leetcode"));
