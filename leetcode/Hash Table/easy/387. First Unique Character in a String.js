// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
  const map = s.split("").reduce((map, letter) => {
    map[letter] = (map[letter] || 0) + 1;
    return map;
  }, {});

  for (let key in map) {
    if (map[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));
