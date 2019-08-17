// Template

var permute = function(nums) {
  const results = [];
  dfsHelper(nums, {}, [], results);
  return results;
};

const dfsHelper = (nums, visited, permutation, results) => {
  if (nums.length === permutation.length) {
    results.push([...permutation]);
    return;
  }

  for (let i = 0; i < nums.length; i ++) {
    if (visited[i]) {
      continue;
    }
    permutation.push(nums[i]);
    visited[i] = true;
    dfsHelper(nums, visited, permutation, results);
    visited[i] = false;
    permutation.pop();
  }
}
