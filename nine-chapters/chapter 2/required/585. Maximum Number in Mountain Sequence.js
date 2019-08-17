const mountainSequence = function (nums) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    //判断上坡还是下坡
    if (nums[mid] <= nums[mid + 1]) {
      start = mid;  //上坡或者是顶点
    } else {
      end = mid;    //下坡
    }
  }
  //最后剩下两个点， 取最大值
  return Math.max(nums[start], nums[end]);
}
