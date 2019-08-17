// Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.
//
//   Example
// Example 1:
// Input:  [-3, 1, 2, -3, 4]
// Output: [0, 2] or [1, 3].
//
//   Explanation:
// return anyone that the sum is 0.
//
// Example 2:
// Input:  [-3, 1, -4, 2, -3, 4]
// Output: [1,5]

// arr =       [-3, 1, 2, -3, 4]
// prefixSum = [0, -3, -2, 0, -3, 1]
// 找prefixSum中有没有相同的数

const subarraySum = (nums) => {
  const map = new Map();
  let sum = 0;

  map.set(0, -1);//key=sum， val=index

  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];

    if (map.has(sum)) {
      return [map.get(sum) + 1, i];
    }
    map.set(sum, i);
  }
  return [];
}

console.log(subarraySum([-3, 1, 2, -3, 4]));
