// Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
//
//   You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
//
//
//
//   Example 1:
//
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.


var isLongPressedName = function(name, typed) {
  let _name = helper(name);
  let _typed = helper(typed);
  if (_name.length !== _typed.length) {
    return false;
  }

  for (let i = 0; i < _typed.length; i ++) {
    if (i % 2 === 0) {  // 字母位
      if (_name[i] !== _typed[i]) {    //字母位不相等，false
        return false;
      }
    } else {    //数字位
      if (Number(_name[i]) > Number(_typed[i])) {   //name的数字位比type的数字位大了，false
        return false;
      }
    }
  }
  return true;
};


// convert "aallex" to "a2l2e1x1"
const helper = (str) => {
  let res = "";
  let i = 0;
  let j = 0;

  while (j < str.length) {
    while (str[i] === str[j]) {
      j ++;
    }
    res = `${res}${str[i]}${j - i}`;
    i = j;
  }
  return res;
}

console.log(isLongPressedName("alex", "ablex"));


