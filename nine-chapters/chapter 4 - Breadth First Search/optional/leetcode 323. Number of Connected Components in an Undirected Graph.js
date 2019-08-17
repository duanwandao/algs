// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
// write a function to find the number of connected components in an undirected graph.
//
// Example 1:
//
// Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]
//
// 0          3
// |          |
// 1 --- 2    4
//
// Output: 2


var countComponents = function(n, edges) {
  const adjacencyList = createAdjacencyList(n, edges);
  const set = new Set();
  const queue = [];
  let counter = 0;
  //对每个点进行BFS
  for (let i = 0; i < n; i ++) {
    // BFS一轮后， set里放的点都是互相联通的。如果i不在set里，说明这个i不与其他点联通，所以counter++
    if (!set.has(i)) {
      counter ++;
      bfs(i, adjacencyList, set, queue);
    }
  }
  return counter;
};

//BFS一轮后， set里放的点都是互相联通的。
const bfs = (i, adjacencyList, set, queue) => {
  queue.push(i);
  set.add(i);

  while (queue.length) {
    const currNode = queue.shift();

    adjacencyList[currNode].forEach((neighbor) => {
      if (!set.has(neighbor)) {
        set.add(neighbor);
        queue.push(neighbor);
      }
    });
  }
}

const createAdjacencyList = (n, edges) => {
  const adjacencyList = {};

  for (let i = 0; i < n; i ++) {
    adjacencyList[i] = [];
  }
  edges.forEach((edge) => {
    adjacencyList[edge[0]].push(edge[1]);
    adjacencyList[edge[1]].push(edge[0]);
  });
  return adjacencyList;
}


const n = 5;
const edges = [[0, 1], [1, 2], [3, 4]];

console.log(countComponents(n, edges));
