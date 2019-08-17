
const primeFactorization = function (num) {
  const res = [];

  for (let i = 2; i * i <= num; i ++) {
    while (num % i === 0) {
      num = num / i;
      res.push(i);
    }
  }

  if (num !== 1) {
    res.push(num);
  }
  return res;
}
