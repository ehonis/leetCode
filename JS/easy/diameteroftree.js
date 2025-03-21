/**
 * Definition for a binary tree node.
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var diameterOfBinaryTree = function (root) {
  const findMaxDepthOfLeft = (root) => {
    if (!root) return 0;
    const leftDepth = findMaxDepthOfLeft(root.left);
    const rightDepth = findMaxDepthOfLeft(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  const findMaxDepthOfRight = (root) => {
    if (!root) return 0;
    const leftDepth = findMaxDepthOfRight(root.left);
    const rightDepth = findMaxDepthOfRight(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  };

  const leftDepth = findMaxDepthOfLeft(root.left);
  const rightDepth = findMaxDepthOfRight(root.right);
  const total = leftDepth + rightDepth;

  return total;
};

function arrayToTree(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}
const treeRoot = arrayToTree([
  4,
  -7,
  -3,
  null,
  null,
  -9,
  -3,
  9,
  -7,
  -4,
  null,
  6,
  null,
  -6,
  -6,
  null,
  null,
  0,
  6,
  5,
  null,
  9,
  null,
  null,
  -1,
  -4,
  null,
  null,
  null,
  -2,
]);

console.log(diameterOfBinaryTree(treeRoot));
