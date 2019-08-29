//首先将数组排序，这样那些重复的整数就会被挤在一起。
// 然后用两根指针，一根指针走得快一些遍历整个数组，另外一根指针，一直指向当前不重复部分的最后一个数。
// 快指针发现一个和慢指针指向的数不同的数之后，就可以把这个数丢到慢指针的后面一个位置，并把慢指针++。

// O(nlogn) time, O(1) extra space
 const deduplication = function (nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < nums.length; j ++) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
}


const deduplication2 = (nums) => Array.from(new Set(nums)).length;

console.log(deduplication([1,3,1,4,4,2, 2, 4, 5, 1, 0]));
//console.log(deduplication([1,1,2]));
