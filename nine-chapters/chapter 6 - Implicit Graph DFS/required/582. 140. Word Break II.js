var wordBreak = function(s, wordDict) {
  const memo = {};
  return wordBreakHelper(s, wordDict, memo);

};

function wordBreakHelper(s, dict, map) {
  if (s in map) return map[s];
  const results = [];
  if (s.length === 0) {
    return results;
  }
  if (dict.includes(s)) {
    results.push(s);
  }

  for (let i = 1; i < s.length; i++) {
    const left = s.substring(0, i);
    const right = s.substring(i);
    if (dict.includes(left)) {
      const segmentations = wordBreakHelper(right, dict, map);

      segmentations.forEach((segment) => {
        results.push(`${left} ${segment}`);
      });
    }
  }
  map[s] = results;
  return results;
}
