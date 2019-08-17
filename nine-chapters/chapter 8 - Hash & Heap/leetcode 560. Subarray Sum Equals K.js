// var subarraySum = function(nums, k) {
//   let sum = 0;
//   let result = 0;
//   let preSum = {0: 1}
//
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (preSum[sum - k]) {
//       result += preSum[sum - k];
//     }
//
//     preSum[sum] = (preSum[sum] ? preSum[sum] : 0) + 1;
//   }
//   console.log(preSum);
//   return result;
// };

// 是否可以不使用二重循环解题？如果不使用二重循环的话，如何能够快速求出任意一个子数组的和？比如要求一个子数组[i,..,j]的和，那么这个该怎么求？有关系式：sum(i,j) = sum(0,j) - sum(0, i)，所以，只要能求出所有[0,...,i]的和，那么其余子数组的和都可以通过这个结果一步求算。
//
// 于是，我们要求出sum(i, j) = k，就可以转化为求k = sum(0, j) - sum(0, i)。也就是说，通过这种转换，可以将一个二维的问题变成一个一维的问题（求一个子数组的起始位置和结束位置是一个二维问题，而子数组的结束位置是一个一维问题）。所以，对于 0～j 位置的和sum(0, j)而言，如果存在位置 i 使得sum(0, j) - sum(0, i) = k，也就是求出所有值为 sum(0, i) 使sum(0, i) = sum(0, j) - k。可以有多个值为sum(0, i)，比如说有sum(0, i1) = sum(0, i2)，那么就可以得出有sum(i1, j) = sum(i2, j) = k，也就是说有两个子数组的和都是 k 。
//
// 因为我们要求出所有sum(0, i) = sum(0, j) - k的sum(0, i)，那么如果有sum(0, i1) = sum(0, i2)的话，可以直接保存一个值sum(0, i)和等于这个值的子数组的个数 count ，然后使用一个 HashMap 保存起来。
var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum += num;
    total += (map.get(sum - k) || 0);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return total;
};

// same as above
//
var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);  //key=sum, val=sum的个数
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      total += map.get(sum - k);
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum)  + 1);
    } else {
      map.set(sum, 1)
    }


  }
  return total;
};


subarraySum([-3, 1, 2, -3, 4], 0);
//[1, 3]

// {
//   -3: [0,0], (0, i)
//   -2: [0,1],
//   0: [0,2],
//   -3: [0,3], (0, j)
//   1: [0, 4],
// }
//
// [3, 5]
//
// sum2 - sum1 = 0 => sun1 = sum2
// (0,j)  (0,i)

