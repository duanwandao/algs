// Given a knight in a chessboard (a binary matrix with 0 as empty and 1 as barrier) with a source position,
// find the shortest path to a destination position, return the length of the route.
// Return -1 if destination cannot be reached.

const shortestPath = function (grid, source, destination) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const queue = [];
  queue.push(source);
  let steps = 0;
  const deltaX = [1, 1, 2, 2, -1, -1, -2, -2];
  const deltaY = [2, -2, 1, -1, 2, -2, 1, -1];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i ++) {
      const point = queue.shift();
      if (point[0] === destination[0] && point[1] === destination[1]) {
        return steps;
      }
      for (let direction = 0; direction < 8; direction ++) {
        const nextPoint = [point[0] + deltaX[direction], point[1] + deltaY[direction]];

        if (!inBound(grid, nextPoint)) {
          continue;
        }
        if (grid[nextPoint[0]][nextPoint[1]] === 0) {
          queue.push(nextPoint);
          grid[nextPoint[0]][nextPoint[1]] = 1;  //变成1 表示遍历过了
        }
      }
    }
    steps ++;
  }
  return -1;

}

const inBound = (grid, point) => {
  const n = grid.length;
  const m = grid[0].length;
  return point[0] >= 0 && point[0] < n && point[1] >= 0 && point[1] < m;
}

const grid = [[0,0,0],
  [0,0,0],
  [0,0,0]];
const source = [2,0];
const destination = [2,2];

console.log(shortestPath(grid, source, destination));

