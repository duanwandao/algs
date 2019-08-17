
const sortColors2 = function (colors, k) {
  rainbowSort(colors, 0, colors.length - 1, 1, k);
}

//类似于quicksort
const rainbowSort = (colors, start, end, colorFrom, colorTo) => {
  if (colorFrom === colorTo) {
    return;
  }
  if (start >= end) {
    return;
  }

  let colorMid = Math.floor((colorFrom + colorTo) / 2);
  let left = start;
  let right = end;

  while (left <= right) {
    while (left <= right && colors[left] <= colorMid) {   //注意 <=
      left ++;
    }
    while (left <= right && colors[right] > colorMid) {   //注意 >
      right --;
    }

    if (left <= right) {
      let temp = colors[left];
      colors[left] = colors[right];
      colors[right] = temp;
      left ++;
      right --;
    }
  }
  rainbowSort(colors, start, right, colorFrom, colorMid);
  rainbowSort(colors, left, end, colorMid + 1, colorTo);
}

