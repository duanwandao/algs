//  Given an array of integers and an integer k,
//  need to find the number of unique k-diff pairs in the array.
//  Here a k-diff pair is defined as an integer pair (i, j),
//  where i and j are both numbers in the array and their absolute difference is k.
//
//  Input: [3, 1, 4, 1, 5], k = 2
//  Output: 2
//
//  Explanation:
//    There are two 2-diff pairs in the array, (1, 3) and (3, 5).
//    Although we have two 1s in the input, we should only return the number of unique pairs.

//方法1
var findPairs1 = function(nums, k) {
    if(k < 0) {
        return 0;
    }
    const set = new Set();
    const res = new Set();

    nums.forEach((num) => {
        if (set.has(num + k)) {
            res.add(num + k);
        }
        if (set.has(num - k)) {
            res.add(num);
        }
        set.add(num);
    });

    return res.size;
};


// 方法2， 求出所有配对 (subset II)， 然后用filter找到符合条件的
var findPairs2 = function(nums, k) {
    if(k < 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    const allPairs = getAllPairs(nums);
    return allPairs.filter((elem) => Math.abs(elem[0] - elem[1]) === k).length;
};

const getAllPairs = (nums) => {

    const res = [];
    helper(nums, 0, [], res);
    return res;
};

const helper = (nums, startIndex, subset, res) => {
    if (subset.length === 2) {
        res.push([...subset]);
        return;
    }

    for (let i = startIndex; i < nums.length; i ++) {
        if (i !== startIndex && nums[i] === nums[i - 1]) {
            continue;
        }
        subset.push(nums[i]);
        helper(nums, i + 1, subset, res);
        subset.pop();
    }
};




console.log(findPairs2([1,2,3,4,5], -1));
