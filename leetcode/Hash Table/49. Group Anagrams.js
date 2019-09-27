// Given an array of strings, group anagrams together.
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Output:
// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
// ]

var groupAnagrams = function(strs) {
    const map = {};

    strs.forEach(str => {
        const sorted = str.split("").sort().join("");
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    });
    return Object.values(map);
};
