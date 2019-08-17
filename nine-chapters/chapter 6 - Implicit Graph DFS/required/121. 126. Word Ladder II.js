var findLadders = function(start, end, dict) {
  dict.push(start)
  dict.push(end)
  const indexes = buildIndex(dict);
  const distance = bfs(end, indexes);
  return distance;
  const results = [];
  dfs(start, end, distance, indexes, [start], results)

};

const buildIndex = (dict) => {
  const indexes = {};

  for (let word of dict) {
    for (let i = 0; i < word.length; i ++) {
      const key = word.substring(0, i) + "%" + word.substring(i + 1, word.length);

      if (indexes[key]) {
        indexes[key].push(word);
      } else {
        indexes[key] = [word];
      }
    }
  }
  return indexes;
}

const bfs = (end, indexes) => {
  const distance = {};
  distance[end] = 0;
  const queue = [end];

  while (queue.length) {
    const currWord = queue.shift();
    for (let nextWord of getNextWord(currWord, indexes)) {
      if (!distance[nextWord]) {
        distance[nextWord] = distance[currWord] + 1;
        queue.push(nextWord);
      }
    }
  }
  return distance;

}

const getNextWord = (word, indexes) => {
  const words = [];
  for (let i = 0; i < word.length; i ++) {
    const key = word.substring(0, i) + "%" + word.substring(i + 1, word.length);
    const wordsArr = indexes[key];
    if (wordsArr) {
      words.push(...wordsArr);
    }
  }
  return words;
}


const dict =["hot","dot","dog","lot","log"];
console.log(findLadders("hit", "cog", dict));


// const indexes = buildIndex(dict);
// console.log(indexes);
// console.log(getNextWord("cog", indexes));
