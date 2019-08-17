// Given a string s, partition s such that every substring of the partition is a palindrome.
//
//   Return all possible palindrome partitioning of s.
//
//   Example:
//
// Input: "aab"
// Output:
//   [
//     ["aa","b"],
//     ["a","a","b"]
//   ]

var partition = function(s) {
  const results = []
  helper(s, 0, [], results);
  return results;
};

const helper = (s, startIndex, subset, results) => {
  if (startIndex === s.length) {
    results.push([...subset]);
    return;
  }

  for (let i = startIndex; i < s.length; i ++) {
    const str = s.substring(startIndex, i + 1);
    if (isPalindrome(str)) {
      subset.push(str);
      helper(s, i + 1, subset, results);
      subset.pop();
    }
  }
}

const isPalindrome = (string) => string == string.split("").reverse().join("");
