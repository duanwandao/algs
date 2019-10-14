// write a function to determine the min distance for the truck to deliver the order.
// deliver area is 2D grid of integers.
// truck start top-left corner, move one cell up, down, left, right
// 1 : accessible areas.  0: no roads
// destination is 9

// same as 611. Knight Shortest Path

const minDistance = function (numRows, numColumns, area) {
  if (!area || area.length === 0 || area[0].length === 0) {
    return 0;
  }

  let destination;
  for (let i = 0; i < numRows; i ++) {
    for (let j = 0; j < numColumns; j ++) {
      if (area[i][j] === 9) {
        destination = [i, j];
      }
    }
  }

  const queue = [];
  queue.push([0, 0]);
  let steps = 0;
  const deltaX = [1, 0, -1, 0];
  const deltaY = [0, 1, 0, -1];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i ++) {
      const point = queue.shift();
      if (point[0] === destination[0] && point[1] === destination[1]) {
        return steps;
      }
      for (let direction = 0; direction < 4; direction ++) {
        const nextPoint = [point[0] + deltaX[direction], point[1] + deltaY[direction]];

        if (!inBound(area, nextPoint)) {
          continue;
        }
        if (area[nextPoint[0]][nextPoint[1]] !== 0) {  // 1 or 9
          queue.push(nextPoint);
          area[nextPoint[0]][nextPoint[1]] = 0;  //变成0 表示遍历过了
        }
      }
    }
    steps ++;
  }
  return -1;
};

const inBound = (area, point) => {
  const n = area.length;
  const m = area[0].length;
  return point[0] >= 0 && point[0] < n && point[1] >= 0 && point[1] < m;
};

const area = [
  [1,0,0],
  [1,0,0],
  [1,9,1]
];

const area2 = [
  [1,1,1,1],
  [0,1,1,1],
  [0,1,0,1],
  [1,1,9,1],
  [0,0,1,1]
];

console.log(minDistance(3, 3, area));
console.log(minDistance(5, 4, area2));

