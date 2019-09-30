// Given an array of integers A, return the largest integer that only occurs once.
//
//If no integer occurs once, return -1.

// Example 1:
//
// Input: [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation:
//     The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.
//
// Example 2:
//
// Input: [9,9,8,8]
// Output: -1
// Explanation:
//     There is no number that occurs only once.

var largestUniqueNumber = function(A) {
    const map = A.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    const occursOnce = [];

    for (let key in map) {
        if (map[key] === 1) {
            occursOnce.push(key);
        }
    }

    if (occursOnce.length) {
        occursOnce.sort((a, b) => b - a);
        return  occursOnce[0]
    }
    return -1;
};
