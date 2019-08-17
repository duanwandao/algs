// Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
// write a function to check whether these edges make up a valid tree.
//
//   Example 1:
//
// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true


// 成为一棵树的条件：
// 点个数为n，边数为 n - 1;
// 所有点都是联通的。利用BFS遍历所有边，找出其中不同的点的个数。如果是 n - 1，则说明所有点都是联通的。


var validTree = function(n, edges) {
  if (n == 0) {
    return false;
  }
  if (edges.length !== n - 1) {
    return false;
  }
  const queue = [0];
  const result = [];
  const visited = {};

  let currentVertex;
  visited[0] = true;
  const adjacencyList = createAdjacencyList(n, edges);

  //BFS 过后， 可以找到所有与0相联通的点， 如果个数正好是n，就说明是一棵树
  while(queue.length){
    currentVertex = queue.shift();
    result.push(currentVertex);

    adjacencyList[currentVertex].forEach(neighbor => {
      if(!visited[neighbor]){
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result.length === n;
};

const createAdjacencyList = (n, edges) => {
  const graph = {};
  for (let i = 0; i < n; i ++) {
    graph[i] = new Set();
  }
  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    graph[u].add(v);
    graph[v].add(u);
  }
  return graph;
}
