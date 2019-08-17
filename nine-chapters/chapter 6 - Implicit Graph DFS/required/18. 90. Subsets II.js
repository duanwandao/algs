// Given a collection of integers that might contain duplicates, nums,
// return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.



const subsetsWithDup = function (nums) {
  const results = [];
  if (nums.length === 0 || !nums) {
    return results;
  }

  nums.sort((a, b) => a - b);

  helper(nums, 0, [], results);
  return results;
}

const helper = (nums, startIndex, subset, results) => {
  results.push([...subset]);
  for (let i = startIndex; i < nums.length; i ++) {

    // if 语句是解决： The solution set must not contain duplicate subsets.
    if (i !== startIndex && nums[i] === nums[i - 1]) {
      continue;
    }
    subset.push(nums[i]);
    helper(nums, i + 1, subset, results);
    subset.pop();
  }
}

console.log(subsetsWithDup([1,2,2]));

