// Given a string which consists of lowercase or uppercase letters,
// find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
// Example:
//
// Input:
//     "abccccdd"
//
// Output:
//     7
//
// Explanation:
//     One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    const map = s.split("").reduce((map, letter) => {
        map[letter] = ~~map[letter] + 1;
        return map;
    }, {});

    const odds = Object.values(map).filter(count => count % 2 !== 0).length;
    return odds > 0 ? s.length - odds + 1 : s.length;
};

