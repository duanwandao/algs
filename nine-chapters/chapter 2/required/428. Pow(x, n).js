// recursive
const myPow = function (x, n) {
  return n >= 0  ? power(x, n) : 1 / power(x, -n);
}

const power = (x, n) => {
  if (n === 0) {
    return 1;
  }
  let half = power(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : x *  half * half;

}



// iteration
const myPow = function (x, n) {
  let ans = 1;
  let base = x;
  while (n !== 0) {
      if (n % 2 === 1) {
          ans *= base;
      }
      base = base * base;
      n = Math.floor(n / 2);
  }
  return n < 0 ? 1 / ans : ans;
}
console.log(myPow(9, 3));
