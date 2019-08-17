// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.
//
//  Each number in candidates may only be used once in the combination.

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
//   A solution set is:
//   [
//     [1, 7],
//     [1, 2, 5],
//     [2, 6],
//     [1, 1, 6]
//   ]

//subsetII + target 限制条件

var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  helper(candidates, target, 0, [], result);
  return result;
};

const helper = (candidates, remainTarget, startIndex, combination, result) => {
  if (remainTarget === 0) {
    result.push([...combination]);
    return;
  }

  for (let i = startIndex; i < candidates.length; i ++) {
    if (remainTarget < candidates[i]) {
      break;
    }

    //如果没有if 限制
    // [
    //   [ 1, 1, 6 ],
    //   [ 1, 2, 5 ],
    //   [ 1, 7 ],
    //   [ 1, 2, 5 ],
    //   [ 1, 7 ],
    //   [ 2, 6 ]
    // ]
    // [1, 2, 5]和[1, 7]重复了
    if (i !== startIndex && candidates[i] === candidates[i - 1]) {
      continue;
    }

    combination.push(candidates[i]);
    helper(candidates, remainTarget - candidates[i], i + 1, combination, result);
    combination.pop();
  }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));

