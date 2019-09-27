// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
//     Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
//  Example 1:
//
// Input: [2,2,1]
// Output: 1

var singleNumber1 = function(nums) {
    const map = nums.reduce((accum, num) => {
        accum[num] = (accum[num] || 0) + 1;
        return accum;
    }, {});

    for (let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
    return null;
};

var singleNumber2 = function(nums) {
    const map = nums.reduce((accum, num) => {
        let count = (accum.get(num) || 0) + 1;
        accum.set(num, count);
        return accum;
    }, new Map());

    for (let [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
};

console.log(singleNumber1([2, 2, 1, 1, 34]));