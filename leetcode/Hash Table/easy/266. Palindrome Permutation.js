// Given a string, determine if a permutation of the string could form a palindrome.
//Example 1:
//
// Input: "code"
// Output: false
//
// Example 2:
//
// Input: "aab"
// Output: true
//
// Example 3:
//
// Input: "carerac"
// Output: true

var canPermutePalindrome = function(s) {
    const map = s.split("").reduce((map, letter) => {
        map[letter] = (map[letter] || 0) + 1;
        return map;
    }, {});

    return Object.values(map).filter(count => count % 2).length <= 1;  // count % 2 !
};

console.log(canPermutePalindrome(x));
