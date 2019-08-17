// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers.

const threeSumClosest = function (numbers, target) {
  numbers.sort((a, b) => a - b);
  let bestSum = numbers[0] + numbers[1] + numbers[2];

  for (let i = 0; i < numbers.length - 2; i ++) {
    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers[left] + numbers[right] + numbers[i];
      if (Math.abs(target - sum) < Math.abs(target - bestSum)) {
        bestSum = sum;
      }
      if (sum > target) {
        right --;
      } else {
        left ++;
      }
    }
  }
  return bestSum;
}
