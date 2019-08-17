// Given a non-empty list of words, return the k most frequent elements.
//
//   Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
//
//   Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

var topKFrequent = function(words, k) {
  if (!words || words.length === 0 || k === 0 || k > words.length) {
    return [];
  }

  const map = words.reduce((accum, currVal) => {
    accum[currVal] = (accum[currVal] || 0) + 1;
    return accum;
  }, {});


  return Object.keys(map).sort((a, b) => {
    if (map[a] === map[b]) {
      //字符串排序, 从小到大
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return map[b] - map[a];
    }
  }).slice(0, k);
};


console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
