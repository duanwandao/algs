// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
//
// Write a function to determine if a number is strobogrammatic. The number is represented as a string.
//
//     Example 1:
//
// Input:  "69"
// Output: true
// Example 2:
//
// Input:  "88"
// Output: true
// Example 3:
//
// Input:  "962"
// Output: false

// 比较首尾
var isStrobogrammatic = function(num) {
    const map = {
        "6": "9",
        "9": "6",
        "8": "8",
        "1": "1",
        "0": "0"
    };

    let i = 0;
    let j = num.length - 1;

    while (i <= j) {
        if (!map[num[i]]) return false;
        if (map[num[i]] !== num[j]) return false;
        i ++;
        j --;
    }
    return true;
};
