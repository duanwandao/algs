// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


var twoSum = function(numbers, target) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return[left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left ++;
    } else {
      right --;
    }
  }
  return [];
};
