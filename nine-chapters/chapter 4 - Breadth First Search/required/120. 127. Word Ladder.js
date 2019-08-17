// Given two words (start and end), and a dictionary, find the shortest transformation sequence from start to end,
// output the length of the sequence.
// Transformation rule such that:
//
// Only one letter can be changed at a time
// Each intermediate word must exist in the dictionary. (Start and end words do not need to appear in the dictionary )

//Input：start ="hit"，end = "cog"，dict =["hot","dot","dog","lot","log"]
// Output：5
// Explanation：
// "hit"->"hot"->"dot"->"dog"->"cog"

var ladderLength = function(beginWord, endWord, wordList) {
  let level = 0;
  const queue = [beginWord];
  const dic = new Set(wordList);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i ++) {
      const currWord = queue.shift();

      if (currWord === endWord) {
        return ++level;
      }
      for (let i = 0; i < currWord.length; i ++) {
        for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j ++) {
          let newWord = currWord.substring(0, i) + String.fromCharCode(j) + currWord.substring(i+1, currWord.length);

          if (dic.has(newWord)) {
            dic.delete(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level ++;
  }
  return 0;
};
