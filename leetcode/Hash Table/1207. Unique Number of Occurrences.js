// Given an array of integers arr, write a function that returns true if and only if the number of
// occurrences of each value in the array is unique.

// Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
//
// Example 2:
//
// Input: arr = [1,2]
// Output: false
//
// Example 3:
//
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

var uniqueOccurrences = function(arr) {

    const map = arr.reduce((map, elem) => {
        map[elem] = (map[elem] || 0) + 1;
        return map;
    }, {});

    const occurrences = [];

    for (let key in map) {
        occurrences.push(map[key]);
    }
    occurrences.sort();

    for (let i = 0; i < occurrences.length; i ++) {
        if (i > 0 && occurrences[i] === occurrences[i - 1]) {
            return false;
        }
    }
    return true;
};
