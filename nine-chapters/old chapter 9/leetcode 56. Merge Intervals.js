var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];


  for (let i = 0; i < intervals.length; i ++) {
    let pre = res[res.length - 1];

    if (i === 0 || intervals[i][0] > pre[1]) {
      res.push(intervals[i]);
    } else {
      pre[1] = Math.max(pre[1], intervals[i][1]);
    }
  }
  return res;
};


