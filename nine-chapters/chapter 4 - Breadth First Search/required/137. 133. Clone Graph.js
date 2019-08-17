/**
 *
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */


var cloneGraph = function(node) {
  if (!node) {
    return null;
  }

  const queue = [node];
  const mapping = {};
  const copyRoot = new Node(node.val, []);
  mapping[node.val] = copyRoot;

  while (queue.length) {
    const currNode = queue.shift();

    for (let n of currNode.neighbors) {
      if (!mapping[n.val]) {
        mapping[n.val] = new Node(n.val, []);
        queue.push(n);
      }
      mapping[currNode.val].neighbors.push(mapping[n.val]);
    }
  }
  return copyRoot;
};


var cloneGraph = function(node) {
  if(node === null) return null;
  //map between nodes and its clone
  let mapping = new Map();
  let queue = [node];
  let newNode = new Node(node.val, []);

  mapping.set(node, newNode);

  while(queue.length) {
    let currNode = queue.shift();

    for(let n of currNode.neighbors) {
      if(!mapping.has(n)) {
        mapping.set(n,new Node(n.val, []));
        queue.push(n);
      }
      mapping.get(currNode).neighbors.push(mapping.get(n));
    }
  }
  return mapping.get(node);
};
