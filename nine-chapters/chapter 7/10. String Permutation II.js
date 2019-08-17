// 同 permutations II
const stringPermutation2 = function (str) {
  //先排序
  const sortedStr = str.split("").sort().join("");
  const results = [];
  dfsHelper(sortedStr, {}, "", results);
  return results;
}
const dfsHelper = (str, visited, permutation, results) => {
  if (permutation.length === str.length) {
    results.push(permutation);
  }

  for (let i = 0; i < str.length; i ++) {
    if (visited[i]) {
      continue;
    }
    if (i > 0 && str[i] === str[i - 1] && !visited[i - 1]) {
      continue;
    }

    permutation += str[i];
    visited[i] = true;
    dfsHelper(str, visited,  permutation, results);
    visited[i] = false;
    permutation = permutation.substring(0, permutation.length - 1);

  }
}
