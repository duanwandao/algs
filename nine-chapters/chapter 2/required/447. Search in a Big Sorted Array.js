const searchBigSortedArray = (reader, target) => {
  let start = 0;
  let end = 1;
  let mid;

  while (reader.get(end) < target) {
    end = end * 2;
  }

  while (start + 1 < end) {
    mid = start + (end - start)  / 2;
    if (reader.get(mid) == target) {
      end = mid;
    } else if (reader.get(mid) < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (reader.get(start) == target)
    return start;
  if (reader.get(end) == target)
    return end;

  return -1;
}
