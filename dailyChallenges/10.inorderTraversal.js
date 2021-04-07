require("colors");

function Node(val) {
  this.left = null;
  this.val = val;
  this.right = null;
}

let root = new Node(4);
root.right = new Node(5);
root.right.left = new Node(6);

function preOrderTraversal(root) {
  if (!root) return;

  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

function inOrderTraversal(root) {
  if (!root) return;

  inOrderTraversal(root.left);
  console.log(root.val);
  inOrderTraversal(root.right);
}

function postOrderTraversal(root) {
  if (!root) return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

console.log("Pre-order traversal is: ", preOrderTraversal(root));
console.log("In-order traversal is: ", inOrderTraversal(root));
console.log("Post-order traversal is: ", postOrderTraversal(root));
