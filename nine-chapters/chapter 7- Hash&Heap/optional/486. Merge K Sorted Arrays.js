// Given k sorted integer arrays, merge them into one sorted array.
//
// Input:
//   [
//     [1, 3, 5, 7],
//     [2, 4, 6],
//     [0, 8, 9, 10, 11]
//   ]
// Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


const mergekSortedArrays = function (arrays) {
  return [].concat(...arrays).sort((a, b) => a - b);
}


