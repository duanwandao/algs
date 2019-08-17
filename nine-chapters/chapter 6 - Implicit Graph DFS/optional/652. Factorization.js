const getFactors = function (n) {
  const res = [];
  dfs(n, 2, [], res);
  return res;
}

const dfs = (n, startIndex, sub, res) => {
  if (n <= 1) {
    if (sub.length > 1) {
      res.push([...sub]);
    }
    return;
  }

  for (let i = startIndex; i <= Math.floor(Math.sqrt(n)); i ++) {
    if (n % i === 0) {
      sub.push(i);
      dfs(n / i, i, sub, res);
      sub.pop();

    }
  }
  // if (n >= startIndex) {
  //   sub.push(n);
  //   dfs(1, n, sub, res);
  //   sub.pop();
  // }
}

const getFactors = (n) => {
  const res = [];

  while (n >=1) {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i ++) {
      if (n % i === 0) {
        res.push(i);
        n = n / i;
        break;
      }
    }
  }
  return res;
}

console.log(getFactors(32));
