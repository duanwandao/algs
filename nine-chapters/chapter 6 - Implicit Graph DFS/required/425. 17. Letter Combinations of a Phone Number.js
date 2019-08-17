const letterCombinations = function (digits) {
  const results = [];
  if (digits.length === 0 || !digits) {
    return results;
  }
  // const KEYBOARD = {
  //   "0": "",
  //   "1": "",
  //   "2": "abc",
  //   "3": "def",
  //   "4": "ghi",
  //   "5": "jkl",
  //   "6": "mno",
  //   "7": "pqrs",
  //   "8": "tuv",
  //   "9": "wxyz"
  // };
  const KEYBOARD = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  dfsHelper(digits, 0, "", results, KEYBOARD);
  return results;

}

const dfsHelper = (digits, index, str, results, KEYBOARD) => {
  if (index === digits.length) {
    results.push(str);
    return;
  }

  const s = KEYBOARD[digits[index]];
  for (let i = 0; i < s.length; i ++) {
    str += s[i];
    dfsHelper(digits, index + 1, str, results, KEYBOARD);
    str = str.substring(0, str.length - 1);
  }
}
console.log(letterCombinations("23"));
