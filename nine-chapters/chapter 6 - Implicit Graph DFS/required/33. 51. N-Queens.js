//一维数组的下标表示横坐标（哪一行），而数组的值表示纵坐标（哪一列）。
//colPlacements=[1,0,2,3]表达含义是：
//当前4个皇后所在坐标点为：[[0,1],[1,0],[2,2],[3,3]]

var solveNQueens = function(n) {
  const results = [];
  dfsHelper(n, [], 0, results);
  return results;
};

const dfsHelper = (n, colPlacements, row, results) => {
  if (row === n) {
    results.push([...drawChessboard(colPlacements, n)]);
    return;
  }

  for (let col = 0; col < n; col ++) {
    if (!isValid(colPlacements, col)) {
      continue;
    }
    colPlacements.push(col);
    dfsHelper(n, colPlacements, row + 1, results);
    colPlacements.pop();
  }
}

const isValid = (colPlacements, col) => {
  for (let row = 0; row < colPlacements.length; row ++) {
    //当前点的x=colPlacements.length， y=col
    //colPlacements里的点的x=row, y=colPlacements[row]
    const diffX = Math.abs(colPlacements.length - row);
    const diffY = Math.abs(colPlacements[row] - col);

    if (!diffY || diffX === diffY) { // same column or diagonal
      return false;
    }
  }
  return true;
}

//[1,3,0,2]
const drawChessboard = (colPlacements, n) => {
  return colPlacements.map((col) => {
    return ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
  })
}
