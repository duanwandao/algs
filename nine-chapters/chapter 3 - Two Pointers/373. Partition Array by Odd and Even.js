const partitionArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {

    while (left <= right && nums[left] % 2 === 1) {
      left ++;
    }
    while (left <= right && nums[right] % 2 === 0) {
      right --;
    }
    if (left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left ++;
      right --;
    }
  }
  return nums;
}


console.log(partitionArray([1,3,2,5,6,2,1,6,3,8,5,9]));
