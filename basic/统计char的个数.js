const test = function (str) {
  return str.split("").reduce((accum, currVal) => {
    accum[currVal] = (accum[currVal] || 0) + 1;
    return accum;
  }, {})
}

console.log(test("abca"));
//map.set(num, (map.get(num) || 0) + 1);
