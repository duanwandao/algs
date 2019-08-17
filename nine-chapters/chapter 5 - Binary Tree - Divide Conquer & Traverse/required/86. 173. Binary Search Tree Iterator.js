

//背诵。。。
function BSTIterator(root){
  this.stack = [];
  while(root){
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function(){
  const root = this.stack.pop();
  let newRoot = root.right;

  while (newRoot) {
    this.stack.push(newRoot);
    newRoot = newRoot.left;
  }
  return root.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function(){
  return this.stack.length > 0;
};
