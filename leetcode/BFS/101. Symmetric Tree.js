// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//     / \
//   2   2
// / \ / \
// 3  4 4  3
//
//
// But the following [1,2,2,null,3,null,3] is not:
//
//     1
//     / \
//   2   2
//    \   \
//    3    3


var isSymmetric = function(root) {
    return recur(root, root);
};

const recur = (t1, t2) => {
    if (!t1 && !t2) {
        return true;
    }
    if (!t1 || !t2) {
        return false;
    }
    if (t1.val !== t2.val) {
        return false;
    }
    return recur(t1.left, t2.right) && recur(t1.right, t2.left);
};


// BFS模板变形，null也要加进去，遍历完每一层时，check is mirror
var isSymmetric2 = function(root) {
    if (!root) {
        return true;
    }
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        const level = [];

        for (let i = 0; i < size; i ++) {
            const node = queue.shift();
            if (node) {
                level.push(node.val);

                if (node.left) {
                    queue.push(node.left);
                } else {
                    queue.push(null);
                }
                if (node.right) {
                    queue.push(node.right);
                } else {
                    queue.push(null);
                }
            } else {
                level.push(null);
            }
        }

        if (!isMirror(level)) {
            return false;
        }
    }
    return true;
};

const isMirror = (arr) => {
    const original = arr.slice();
    const reversed = arr.reverse();

    for (let i = 0; i < original.length; i ++) {
        if (original[i] !== reversed[i]) {
            return false;
        }
    }
    return true;
};