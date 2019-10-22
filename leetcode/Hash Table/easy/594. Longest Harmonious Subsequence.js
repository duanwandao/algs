// We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.
//
// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
//
//     Example 1:
//
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].


var findLHS = function(nums) {
    const map = nums.reduce((map, num) => {
        map[num] = ~~map[num] + 1;
        return map;
    }, {});

    let max = 0;
    Object.keys(map).forEach(key => {
        key = Number(key);  // Object.keys(map) returns an array of strings
        if (map[key + 1]) {
            max = Math.max(max, map[key] + map[key + 1]);
        }
    });
    return max;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
