// var canFinish = function(numCourses, prerequisites) {
//   //if (!numCourses || numCourses === 0 || !prerequisites || prerequisites.length === 0) { return true; }
//
//   const inDegree = {};
//   const edges = {};
//   for (let i = 0; i < numCourses; i ++) {
//     inDegree[i] = 0;
//     edges[i] = [];
//   }
//
//   prerequisites.forEach((preq) => {
//     inDegree[preq[0]] ++;
//     edges[preq[1]].push(preq[0]);
//   });
//
//
//   const queue = [];
//   for (let i = 0; i < numCourses; i ++) {
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }
//
//   while (queue.length) {
//     const node = queue.shift();
//     numCourses --;
//
//     edges[node].forEach((nextNode) => {
//       inDegree[nextNode] --;
//       if (inDegree[nextNode] === 0) {
//         queue.push(nextNode);
//       }
//     });
//   }
//
//   return numCourses === 0;
// };

// There are a total of n courses you have to take, labeled from 0 to n - 1.
//
// Some courses may have prerequisites,
// for example to take course 0 you have to first take course 1, which  is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs,
// is it possible for you to finish all courses?

// In-Degree array就是存储每个点的入度数的队列，
// Adjacency list则是存储每个点通过出度连接的所有点的数据结构。

// (1)遍历有向图中所有的边可以构造出上面提到的两个数据结构，时间复杂度为O(e)
// (2)从In-Degree array中找所有点中入度数为0的点，构成初始队列，时间复杂度O(n)
// (3)通过队首出列，调整与队首元素出度相连的所有点的入度数 (入度 - 1)，并检查这些点的入度数是否为0，若是则入队列
// (4)重复步骤(3)直至队列为空，此时若从队列中出列的所有点的数目为原来有向图中所有点的数目，
// 则图中不存在闭合的环，且出列的顺序是一种可行的遍历方法。步骤(3)(4)的时间复杂度为O(n+e)。e为图中所有边的数目。
var canFinish = function(numCourses, prerequisites) {
  //if (!numCourses || numCourses === 0 || !prerequisites || prerequisites.length === 0) { return true; }
  const inDegree = {};
  const edges = {};
  const queue = [];

  for (let i = 0; i < numCourses; i ++) {
    inDegree[i] = 0;
    edges[i] = [];
  };
  prerequisites.forEach((preq) => {
    inDegree[preq[0]] ++;
    edges[preq[1]].push(preq[0]);
  });

  for (const key in inDegree) {
    if (inDegree[key] === 0) {
      queue.push(key);
    }
  }

  while (queue.length) {
    const curr = queue.shift();

    numCourses --;
    edges[curr].forEach((next) => {
      inDegree[next] --;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    })
  }
  return numCourses === 0;

};


canFinish(2, [[1, 0]]);
