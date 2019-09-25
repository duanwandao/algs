// Given a non-empty array of integers, return the k most frequent elements.
//
//   Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]


var topKFrequent = function(nums, k) {
  const map = nums.reduce((accum, currVal) => {
    accum[currVal] = (accum[currVal] || 0) + 1;
    return accum;
  }, {});

  return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4,5,6,6,6,6,6,6, 9, 9, 7, 1], 2));
//{
// '1': 3,
// '2': 2,
// '3': 1,
// '4': 4,
// '5': 1,
// '6': 6
// }

//[ 3, 2, 1, 4, 1, 6 ]
//after partition
//[ 1, 1, 2, 3, 4, 6 ]
