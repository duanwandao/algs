

const subsets = function (nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  helper(nums, 0, [], results);
  return results;
}
const helper = (nums, startIndex, subset, results) => {
  results.push([...subset]);

  // 可有可无
  if (startIndex >= nums.length) {
    return;
  }

  for (let i = startIndex; i < nums.length; i ++) {
    subset.push(nums[i]);
    helper(nums, i + 1, subset, results);
    subset.pop();
  }
}

console.log(subsets([1,2,3]));


// const getAllPairs = function (nums) {
//   const results = [];
//   helper(nums, 0, [], results);
//   return results;
// }
//
// const helper = (nums, startIndex, subset, results) => {
//   if (subset.length === 2) {
//     results.push([...subset]);
//     return;
//   }
//
//   for (let i = startIndex; i < nums.length; i ++) {
//     subset.push(nums[i]);
//     helper(nums, i + 1, subset, results);
//     subset.pop();
//   }
// }
//
// console.log(getAllPairs(["stu1", "stu2", "stu3"]));


