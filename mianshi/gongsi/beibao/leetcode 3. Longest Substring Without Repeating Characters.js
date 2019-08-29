

// fast 一直走，一直往set里加
// 如果set里有重复了，就移动slow，一直往后找， 边走边删掉set里的字符，找到与fast相同的字符为止

const lengthOfLongestSubstring = (s) => {
  if (!s || s.length==0)
    return 0;

  const set = new Set();
  let max = 1;
  let slow = 0;
  let fast = 0;

  for (; fast < s.length; fast ++) {
    const cur = s.charAt(fast);

    if (set.has(cur)) {
      while (slow < fast && s.charAt(slow) !== cur) {
        set.delete(s.charAt(slow));
        slow ++;
      }
      slow ++;
    } else {
      set.add(cur);
    }
    max = Math.max(max, fast - slow + 1);
  }

  return max;
}

const s = "abcdeeef"
console.log(lengthOfLongestSubstring(s));

