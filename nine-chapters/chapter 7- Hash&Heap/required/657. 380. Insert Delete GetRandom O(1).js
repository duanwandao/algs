// Design a data structure that supports all following operations in average O(1) time.
//
// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements.
// Each element must have the same probability of being returned.


var RandomizedSet = function() {
  this.nums = [];
  this.map = {};  //key 存数字，val存此数字在数组里的下标
};

//插入数组最后， 存入map
RandomizedSet.prototype.insert = function(val) {
  const { nums, map } = this;
  if (map[val] === undefined) {   //不能写!map[val] 因为如果map[val]可能是0
    nums.push(val);
    map[val] = nums.length - 1;
    return true;
  }
  return false;
};


//用数组最后一个元素覆盖要删除的数字，把map里的数组中最后一个元素的value改成要删掉数字的下标。 把数组中最后一个元素pop。 删除map中的entry
RandomizedSet.prototype.remove = function(val) {
  const { nums, map } = this;
  if (map[val] === undefined) {
    return false;
  }
  let len = nums.length;
  let index = map[val];
  if (index !== len - 1) {
    nums[index] = nums[len - 1];
    map[nums[len - 1]] = index;
  }

  nums.pop();
  delete map[val];
  return true;

};

RandomizedSet.prototype.getRandom = function() {
  const { nums } = this;
  let index;
  for (let i = 1; i <= nums.length; i ++) {
    index = Math.floor(Math.random() * i);
  }
  return nums[index];

};
