const flatten = function(arr, result = []) {
  for (let value of arr) {

    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

// with helper function

// const flatten = function(arr) {
//   return helper(arr, []);
// };
//
// const helper = (arr, result) => {
//   for (let value of arr) {
//
//     if (Array.isArray(value)) {
//       helper(value, result);
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// }


//================FOLLOW UP====================
// second paremeter layer to control how far the flatten can reach


// const flatten = function(arr, layer) {
//   return helper(arr, [], layer);
// };
//
//
// const helper = (arr, result, layer) => {
//
//   for (let value of arr) {
//     if (Array.isArray(value) && layer > 0) {
//       helper(value, result, layer - 1);
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// }


console.log(flatten([3, [2, [1, [0]]]], 1));




var twoDArray = function(v) {
  return [].concat(...v);
};
