var reverseVowels = function(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");

  while (left < right) {
    if (vowels.has(arr[left]) && vowels.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left ++;
      right --;
    } else if (vowels.has(arr[left]) && !vowels.has(arr[right])) {
      right --;
    } else if (!vowels.has(arr[left]) && vowels.has(arr[right])) {
      left ++;
    } else {
      left ++;
      right --;
    }
  }
  return arr.join("");

};

console.log(reverseVowels("leetcode"));
