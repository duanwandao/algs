
//========================first position of a target========================


const firstPositionOfTarget = function (nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    while (start + 1 < end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] < target) {
        start = mid;
      } else if (nums[mid] === target) {
        end = mid;
      } else {
        end = mid;
      }
    }

    if (nums[start] === target) {
      return start;
    }
    if (nums[end] === target) {
      return end;
    }
    return -1;
  }
}

//========================last position of a target========================


const lastPosition = function (nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else if (nums[mid] === target) {
      start = mid;  //not end = mid;
    } else {
      end = mid;
    }
  }

  // switch two if, check end first.
  if (nums[end] === target) {
    return end;
  }
  if (nums[start] === target) {
    return start;
  }

  return -1;
}

//========================last num < target (first position of a target)========================

var findLastNumSmallerThanTarget = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      end = mid;        //!!
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[start] < target) {
    return start;
  }
  if (nums[end] < target) {
    return end;
  }
};

//========================first num > target===========================

var findFirstNumGreaterThanTarget = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      start = mid;          // !!
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[start] > target) {
    return start;
  }
  if (nums[end] > target) {
    return end;
  }
};


const nums = [1,1,1,1,2,2,4,4,4,5,7];
//findLastNumSmallerThanTarget(nums, 3);
findFirstNumGreaterThanTarget(nums, 0);

