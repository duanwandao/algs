const minLength = function (s, dict) {
  const queue = [s];
  const set = new Set();
  set.add(s);
  let min = s.length;

  while (queue.length) {
    let currStr = queue.shift();

    for (let sub of dict) {
      let found = currStr.indexOf(sub);

      while (found !== -1) {
        let newStr = currStr.substring(0, found) + currStr.substring(found + sub.length, currStr.length);

        if (!set.has(newStr)) {
          min = Math.min(min, newStr.length);
          set.add(newStr);
          queue.push(newStr);
        }
        //删掉一次ab后，要继续看看后面还有没有ab，found+1表示搜索的起始位置，即上一次搜索到的位置+1
        found = currStr.indexOf(sub, found + 1);
      }
    }
  }
  return min;
}

console.log(minLength("ccdaabcdbb", ["ab","cd"]));
