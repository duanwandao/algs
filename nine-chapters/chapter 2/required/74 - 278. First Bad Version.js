
// const findFirstBadVersion = function (n) {
//   let start = 1;
//   let end = n;
//
//   while (start + 1 < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (!SVNRepo.isBadVersion(mid)) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//   }
//   if (SVNRepo.isBadVersion(start)) {
//     return start;
//   }
//   return end;
// }



var solution = function(isBadVersion) {

  return function(n) {
    let start = 0;
    let end = n;

    while (start + 1 < end) {
      let mid = Math.floor((start + end) / 2);

      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid;
      }
    }

    if (isBadVersion(start)) {
      return start;
    }
    if (isBadVersion(end)) {
      return end;
    }
    return -1;
  };
};
