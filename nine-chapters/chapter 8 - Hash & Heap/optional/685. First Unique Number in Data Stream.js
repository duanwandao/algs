// 685. First Unique Number in Data Stream
// Given a continuous stream of data, write a function that returns the first unique number (including the terminating number) when the terminating number arrives. If the unique number is not found, return -1.
//
// Example
// Example1
//
// Input:
//   [1, 2, 2, 1, 3, 4, 4, 5, 6]
// 5
// Output: 3





//循环两遍，此题是固定的数组，数据流看II。
const firstUniqueNumber = function (nums, number) {
  const map = {};

  for (let i = 0; i < nums.length; i ++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;

    if (nums[i] === number) {
      break;
    }
    if (i === nums.length - 1 && nums[i] !== number) {
      return -1;
    }
  }

  for (let n of nums) {
    if (map[n] === 1) {
      return n;
    }
  }
  return -1;
}

console.log(firstUniqueNumber([1,2,2,1,3,4], 3));
