// An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel.
// The black pixels are connected, i.e., there is only one black region.
// Pixels are connected horizontally and vertically.
// Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.



//Number of Islands的套路， BFS过后 res里存的就是所有联通在一起的1.
// 找出上下左右边界
var minArea = function(image, x, y) {
  const queue = [[x, y]];
  const res = [];
  const directionX = [0, 1, 0, -1];
  const directionY = [-1, 0, 1, 0];

  while (queue.length) {
    const curr = queue.shift();
    image[curr[0]][curr[1]] = 0;   //注意要变成0
    res.push(curr);

    for (let m = 0; m < 4; m ++) {
      const x = curr[0] + directionX[m];
      const y = curr[1] + directionY[m];

      if (!inBound(image, x, y)) {
        continue;
      }
      if (image[x][y] === "1") {
        image[x][y] = "0";
        queue.push([x, y]);
      }
    }
  }

  let left = Number.MAX_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;
  let top = Number.MAX_SAFE_INTEGER;
  let bottom = Number.MIN_SAFE_INTEGER;

  res.forEach((p) => {
    left = Math.min(left, p[1]);
    right = Math.max(right, p[1]);
    top = Math.min(top, p[0]);
    bottom = Math.max(bottom, p[0]);
  });

  return (right - left + 1) * (bottom - top + 1);
};

const inBound = (image, x, y) => {
  return x >= 0 && y >= 0 && x < image.length && y < image[0].length;
}


const image = [
  ["0","0","1","0"],
  ["0","1","1","1"],
  ["0","0","1","0"]
]
console.log(minArea(image, 0, 2));


// left: 1   最小的y
// right: 3  最大的y
// top: 1    最小的x
// bottom: 1 最大的x

