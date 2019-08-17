const zombie = function (grid) {
  const PEOPLE = 0;
  const ZOMBIE = 1;
  const WALL = 2;
  let people = 0;
  const queue = [];
  let days = 0;
  const deltaX = [1, 0, -1, 0];
  const deltaY = [0, 1, 0, -1];

  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j ++) {
      if (grid[i][j] === PEOPLE) {
        people ++;
      }
      if (grid[i][j] === ZOMBIE) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const size = queue.length;
    days ++;
    for(let i = 0; i < size; i ++) {
      const curr = queue.shift();
      for (let direction = 0; direction < 4; direction ++) {
        const next = [curr[0] + deltaX[direction], curr[1] + deltaY[direction]];
        if (isPeople(grid, next)) {
          grid[next[0]][next[1]] = ZOMBIE;
          queue.push(next);
          people --;
          if (people === 0) {
            return days;
          }
        }
      }
    }
  }
  return -1;
}

const isPeople = (grid, next) => {
  const row = grid.length;
  const column = grid[0].length;
  if (next[0] >= row || next[0] < 0) {
    return false;
  }
  if (next[1] >= column || next[1] < 0) {
    return false;
  }
  return grid[next[0]][next[1]] === 0;
}
