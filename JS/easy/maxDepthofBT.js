/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let maxDepthLen = 1;

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const root = new TreeNode(1);
root.right = new TreeNode(2);

console.log(maxDepth(root));
