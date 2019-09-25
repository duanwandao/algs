
// 此时的prices数组就是前缀和数组
//
const maxProfit = function (prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let min = prices[0];


  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }
  return max;
}
