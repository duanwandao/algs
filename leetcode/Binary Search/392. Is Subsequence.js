
//Follow up TODO, seems use binary search


var isSubsequence = function(s, t) {
  let index = 0;

  for (let i = 0; i < t.length; i ++) {
    if (s[index] === t[i]) {
      index ++;
    }
  }
  return index === s.length;
};

