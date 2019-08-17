//Calculate the a^n % b where a, b and n are all 32bit non-negative integers.
const fastPower = function (a, b, n) {
  if (n === 0) {
    return 1 % b;
  }

  let product = fastPower(a, b, Math.floor(n / 2));
  product = (product * product) % b;
  if (n % 2 === 1) {
    return (product * a) % b;
  } else {
    return product;
  }

}
