
var sortColors = function(nums) {
  if (!nums || nums.length === 0) {
    return;
  }
  let zero = 0;
  let two = nums.length - 1;
  let i = 0;
  let temp;

  while (i <= two) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[zero];
      nums[zero] = temp;
      zero ++;
      i ++;
    } else if (nums[i] === 1) {
      i ++;
    } else {
      temp = nums[i];
      nums[i] = nums[two];
      nums[two] = temp;
      two --;         //注意不要 i++， 从右边调过来的数可能是0或者2
    }
  }
  return nums;
};
