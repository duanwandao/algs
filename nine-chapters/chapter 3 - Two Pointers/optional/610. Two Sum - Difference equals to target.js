//无序数列怎么办？

const twoSum7 = function (nums, target) {
  nums.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < nums.length;  i ++) {
    if (i === j) {
      j ++;
    }
    while (j < nums.length && nums[j] - nums[i] < target) {
      j ++;
    }
    if (j < nums.length && nums[j] - nums[i] === target) {
      return [i + 1, j + 1];
    }
  }
  // while (i < nums.length) {
  //     if (i === j) {
  //         j ++;
  //     }
  //     while (j < nums.length && nums[j] - nums[i] < target) {
  //         j ++;
  //     }
  //     if (j < nums.length && nums[j] - nums[i] === target) {
  //         return [i + 1, j + 1];
  //     }
  //     i ++;
  // }
  return [];

}

console.log(twoSum7([1,0,1], 0));
