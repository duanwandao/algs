// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space
// (size that is greater or equal to m + n) to hold additional elements from nums2.
//
//
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let insertPosition = m + n - 1;
    m --;
    n --;

    while (n >= 0) {
        nums1[insertPosition --] = nums1[m] > nums2[n] ?  nums1[m --] : nums2[n --];
    }
    return nums1;
};


const mergeTwoSortedArrays = (nums1, nums2) => {
    let i = 0;
    let j = 0;
    const res = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i ++]);
        } else {
            res.push(nums2[j ++]);
        }
    }

    while (i < nums1.length) {
        res.push(nums1[i ++]);
    }

    while (j < nums2.length) {
        res.push(nums2[j ++]);
    }

    return res;
};



const nums1 = [1, 2, 3];
const nums2 = [2,5,6, 8];

console.log(mergeTwoSortedArrays(nums1, nums2));