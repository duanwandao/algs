var findOrder = function(numCourses, prerequisites) {
  //if (!numCourses || numCourses === 0 || !prerequisites || prerequisites.length === 0) { return [0]; }
  const inDegree = {};
  const edges = {};
  const queue = [];
  const res = [];

  for (let i = 0; i < numCourses; i ++) {
    inDegree[i] = 0;
    edges[i] = [];
  }
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
    res.push(curr);
    numCourses --;
    edges[curr].forEach((next) => {
      inDegree[next] --;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    });
  }
  return numCourses === 0 ? res: [];
};
