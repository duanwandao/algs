const fourSum = function (numbers, target) {
  numbers.sort((a, b) => a - b);
  let res = []
  for (let i = 0; i < numbers.length - 3; i ++) {
    if (i !== 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < numbers.length - 2; j ++) {
      if (j !== i + 1 && numbers[j] === numbers[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = numbers.length - 1;

      while (left < right) {
        let sum = numbers[i] + numbers[j] + numbers[left] + numbers[right];
        if (sum < target) {
          left ++;
        } else if (sum > target) {
          right --;
        } else {
          res.push([numbers[i], numbers[j], numbers[left], numbers[right]]);
          left ++;
          right --;

          while (left < right && numbers[left] === numbers[left - 1]) {
            left ++;
          }
          while (left < right && numbers[right] === numbers[right + 1]) {
            right --;
          }
        }
      }
    }
  }
  return res;
}

console.log(fourSum([-5,-3,-2,1,2,2,3,4,9], 1));

