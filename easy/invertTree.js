function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
};

// Function to generate a balanced binary tree with `n` nodes
function generateTree(n) {
  if (n <= 0) return null;

  let nodes = Array.from({ length: n }, (_, i) => new TreeNode(i));

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (2 * i + 1 < n) nodes[i].left = nodes[2 * i + 1];
    if (2 * i + 2 < n) nodes[i].right = nodes[2 * i + 2];
  }

  return nodes[0]; // Root node
}

// Generate a tree with 1,000 nodes
const largeRoot = generateTree(100000000);

// Measure execution time
const { performance } = require("perf_hooks");
const start = performance.now();
invertTree(largeRoot);
const end = performance.now();

console.log(`Runtime: ${(end - start).toFixed(4)} ms`);
