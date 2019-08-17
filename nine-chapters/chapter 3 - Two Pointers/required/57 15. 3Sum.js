// Given an array of n objects with k different colors (numbered from 1 to k),
// sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.

const threeSum = function (numbers) {
  numbers.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < numbers.length - 2; i ++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }
    let target = -numbers[i];
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      if (numbers[left] + numbers[right] === target) {
        res.push([numbers[i], numbers[left], numbers[right]]);
        left ++;
        right --;
        while (left < right && numbers[left] === numbers[left - 1]) {   // - 1
          left ++;
        }
        while (left < right && numbers[right] === numbers[right + 1]) { // + 1
          right --;
        }
      } else if (numbers[left] + numbers[right] < target) {
        left ++;
      } else {
        right --;
      }
    }

  }
  return res;
}

console.log(threeSum([-2,-3,-4,-5,-100,99,1,4,4,4,5,1,0,-1,2,3,4,5]));
