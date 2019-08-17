var numIslands = function(grid) {
  if (!grid || grid.length == 0 || grid[0].length === 0) {
    return 0;
  }

  const row = grid.length;
  const column = grid[0].length;
  let islands = 0;

  for (let i = 0; i < row; i ++) {
    for (let j = 0; j < column; j ++) {
      if (grid[i][j] === "1") {
        bfs(grid, i, j);
        islands ++;
      }
    }
  }
  return islands;
}

const bfs = (grid, i, j) => {
  const queue = [[i, j]];

  grid[i][j] = "0";
  const directionX = [0, 1, 0, -1];
  const directionY = [-1, 0, 1, 0];

  while (queue.length) {
    const curr = queue.shift();

    for (let m = 0; m < 4; m ++) {
      const x = curr[0] + directionX[m];
      const y = curr[1] + directionY[m];

      if (!inBound(grid, x, y)) {
        continue;
      }
      if (grid[x][y] === "1") {
        grid[x][y] = "0";
        queue.push([x, y]);
      }
    }
  }
}
const inBound = (grid, x, y) => {
  return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
}


console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
