// 171
const anagrams = function (strs) {
  const map = new Map();
  const res = [];
  strs.forEach((str) => {
    const sortedStr = sortStr(str);
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }

  })

  map.forEach((value) => {
    if (value.length > 1) {
      value.forEach((v) => {
        res.push(v);
      })
    }
  });
  return res;
}

const sortStr = (str) => {
  return str.split("").sort().join("");
}


//49.

var groupAnagrams = function(strs) {
  const map = new Map();
  const res = [];
  strs.forEach((str) => {
    const sortedStr = sortStr(str);
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }

  })

  map.forEach((value) => {
    res.push(value);
  });
  return res;

};

const sortStr = (str) => {
  return str.split("").sort().join("");
};
