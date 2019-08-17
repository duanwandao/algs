const sortLetters = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    while (left <= right && arr[left].toLowerCase() === arr[left]) {
      left ++;
    }
    while (left <= right && arr[right].toUpperCase() === arr[right]) {
      right --;
    }
    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left ++;
      right --;
    }
  }
  return arr;
}

console.log(sortLetters(["a", "b", "A", "c", "D"]));
