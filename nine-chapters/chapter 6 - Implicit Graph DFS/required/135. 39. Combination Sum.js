// subset template
//
// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.
//
//  The same repeated number may be chosen from candidates unlimited number of times


// Input: candidates = [2,3,6,7], target = 7,
//   A solution set is:
//   [
//     [7],
//     [2,2,3]
//   ]

// 这题canditates里是没有重复数字的，然后里面的数字能在set里出现多次，
// 如果candidates里有重复数字，那就得先去重。
const combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  helper(candidates, target, 0, [], result);
  return result;

}
const helper = (candidates, remainTarget, startIndex, combination, result) => {
  if (remainTarget === 0) {
    result.push([...combination]);
    return;
  }

  for (let i = startIndex; i < candidates.length; i ++) {
    // 剪枝
    if (candidates[i] > remainTarget) {
      break;
    }
    combination.push(candidates[i]);
    helper(candidates, remainTarget - candidates[i], i, combination, result);
    combination.pop();
  }
}

console.log(combinationSum([2,3,5], 8));
