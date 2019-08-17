// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
//
// (Here, the distance between two points on a plane is the Euclidean distance.)
//
// You may return the answer in any order.
// The answer is guaranteed to be unique (except for the order that it is in.)
//
// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]

var kClosest = function(points, K) {
  if (!points || points.length === 0 || K < 1 || K > points.length) {
    return -1;
  }
  partition(points, 0, points.length - 1, K);
  return points.slice(0, K);
};

const partition = (points, start, end, K) => {
  if (start >= end) {
    return points;
  }

  let left = start;
  let right = end;
  let pivot = points[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (left <= right && getDistance(points[left]) < getDistance(pivot)) {
      left ++;
    }
    while (left <= right && getDistance(points[right]) > getDistance(pivot)) {
      right --;
    }
    if (left <= right) {
      let temp = points[left];
      points[left] = points[right];
      points[right] = temp;
      left ++;
      right --;
    }
  }
  //      -----------------
  // start      r  l       end
  // k >= left， 表示要找的数在l - end
  // k <= right， 表示要找的数在start - r
  if (K >= left) {
    partition(points, left, end, K);
  }
  if (K <= right) {
    partition(points, start, right, K);
  }
  return points;
}


const getDistance = (point) => point[0] * point[0] + point[1] * point[1];
