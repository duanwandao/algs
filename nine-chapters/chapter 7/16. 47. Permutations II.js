//先排序
var permuteUnique = function(nums) {
  const results = [];
  nums.sort((a, b) => a - b);
  dfsHelper(nums, {}, [], results);
  return results;
};

const dfsHelper = (nums, visited, permutation, results) => {
  if (permutation.length === nums.length) {
    results.push([...permutation]);
  }
  for (let i = 0; i < nums.length; i ++) {
    if (visited[i]) {
      continue;
    }
    //加一句if
    if (i > 0  && nums[i] === nums[i - 1] && !visited[i - 1]) {
      continue;
    }
    permutation.push(nums[i]);
    visited[i] = true;
    dfsHelper(nums, visited, permutation, results);
    visited[i] = false;
    permutation.pop();
  }
}
