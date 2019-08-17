// Give a string, you can choose to split the string after one character or two adjacent characters,
// and make the string to be composed of only one character or two characters. Output all possible results.
//
//
// Example1
//
// Input: "123"
// Output: [["1","2","3"],["12","3"],["1","23"]]


const splitString = (s) => {
  const res = [];
  dfs(s, 0, [], res);
  return res;
}

const dfs = (s, startIndex, subset, res) => {
  if (startIndex === s.length) {
    res.push([...subset]);
    return;
  }

  for (let i = startIndex; i < startIndex + 2 && i < s.length ; i ++) {
    const subString = s.substring(startIndex, i + 1);
    subset.push(subString);
    dfs(s, i + 1, subset, res);
    subset.pop();
  }
}


console.log(splitString("123"));
