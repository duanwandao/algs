// //最少写操作
const moveZeroes = function (nums) {
  let left  = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];  //直接覆盖
      left ++;
    }
    right ++;
  }
  //把left之后的全变成0
  while (left < nums.length) {
    if (nums[left] !== 0) {
      nums[left] = 0;
    }
    left ++;
  }
}
console.log(moveZeroes([1,0,3,0,0,12]));


// right一直走， 碰到不是0的, 和left 交换， left ++
const moveZeroes2 = function (nums) {
  let left  = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left ++;
    }
    right ++;
  }
  return nums;
}
console.log(moveZeroes2([1,0,3,0,0,12]));


//=========================FOLLOW UPS========================================
// 如果需要保证最少修改次数如何做？
// 使用 Partition 的方法可以做到交换次数最优

// 不需要维持相对顺序 vs 需要维持相对顺序 算法有什么区别？
// 不需要维护相对顺序，可以使用 Partition 的方法，时空复杂度和交换次数都是最优的
// 需要维护相对顺序的，只能使用同向双指针的方法，时空复杂度最优，但是交换次数不是最优的

const moveZeroes3 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (left <= right && nums[left] !== 0) {
      left ++;
    }
    while (left <= right && nums[right] === 0) {
      right --;
    }

    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left ++;
      right --;
    }
  }
  return nums;
}
console.log(moveZeroes3([1,0,3,0,0,12]));



var moveZeroes4 = function(nums) {
  return [...nums.filter((num) => !!num), ...nums.filter((num) => !num)];
};

