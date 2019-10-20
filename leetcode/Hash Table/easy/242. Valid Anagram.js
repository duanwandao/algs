// Given two strings s and t , write a function to determine if t is an anagram of s.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram1 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};

    for (let i = 0; i < s.length; i ++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }
    
    return Object.values(map).every(count => count === 0);
};

var isAnagram2 = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};
