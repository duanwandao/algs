// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
// return a sorted array of only the integers that appeared in all three arrays.
//
// Example 1:
//
// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.


var arraysIntersection = function(arr1, arr2, arr3) {
    const map = [arr1, arr2, arr3].reduce((map, arr) => {
        arr.forEach(elem => {
            map[elem] = (map[elem] || 0 ) + 1;
        });
        return map;
    }, {});

    const res = [];
    for (let key in map) {
        if (map[key] === 3) {
            res.push(key);
        }
    }
    return res;
};

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,5,7,9];
const arr3 = [1,3,4,5,8];

console.log(arraysIntersection(arr1, arr2, arr3));