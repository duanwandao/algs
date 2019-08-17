
// Given two strings S and T, return if they are equal when both are typed into empty text editors.
// # means a backspace character.
//
//   Example 1:
//
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".



var backspaceCompare = function(S, T) {
  return helper(S) === helper(T);
};

const helper = (str) => {
  const stack = [];

  str.split("").forEach((ch) => {
    if (ch === "#") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  })
  return stack.join("");
}

console.log(helper("ab#c"));
