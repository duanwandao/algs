// Prime factorize a given integer.
//
// Input: 10
// Output: [2, 5]
//
// Input: 660
// Output: [2, 2, 3, 5, 11]


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
