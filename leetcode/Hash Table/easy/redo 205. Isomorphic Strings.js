// Given two strings s and t, determine if they are isomorphic.
//
//     Two strings are isomorphic if the characters in s can be replaced to get t.
//
//     All occurrences of a character must be replaced with another character while preserving the order of characters.
//     No two characters may map to the same character but a character may map to itself.
//
//     Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true


// we need to check whether map.values() contain duplicate value.
//If map.value contain duplicate value, it means that multiple keys map to a same value, which is not allowed.
var isIsomorphic = function(s, t) {
    const map = {};

    for (let i = 0; i < s.length; i ++) {
        if (!map[s[i]]) {
            map[s[i]] = t[i];
        } else {
            if (map[s[i]] !== t[i]) {
                return false;
            }
        }
    }
    return new Set(Object.values(map)).size === Object.keys(map).length;
};
