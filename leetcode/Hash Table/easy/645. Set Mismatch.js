// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error,
// one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//
//     Given an array nums representing the data status of this set after the error.
//     Your task is to firstly find the number occurs twice and then find the number that is missing.
//     Return them in the form of an array.
//
//     Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

var findErrorNums = function(nums) {
    const res = [];
    const set = new Set();

    const expectedSum = (1 + nums.length) * nums.length / 2;

    const sum = nums.reduce((accum, num) => {
        return accum += num;
    }, 0);

    for (let num of nums) {
        if (set.has(num)) {
            res.push(num, expectedSum + num - sum);
        }
        set.add(num);
    }
    return res;
};
