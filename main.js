import { Tree, Node, prettyPrint } from './BST.js';

// Generate Random Numbers
const generateRandomNumbers = (count, max) => {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max));
    }
    return Array.from(numbers);
};

const randomNumbers = generateRandomNumbers(15, 100);
console.log("Generated Random Numbers:", randomNumbers);

// Create BST
const tree = new Tree(randomNumbers);
console.log("\nInitial BST:");
prettyPrint(tree.root);

// Check if the tree is balanced
console.log("Is the tree balanced?", tree.isBalanced() ? "Yes" : "No");

// Traversals
console.log("\nLevel Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("\nPre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("\nPost Order:");
tree.postOrder((node) => console.log(node.data));

// Insert elements to unbalance the tree
tree.insert(150);
tree.insert(200);
tree.insert(250);

console.log("\nBST after inserting 150, 200, 250:");
prettyPrint(tree.root);

// Check balance after insertions
console.log("Is the tree balanced after adding large numbers?", tree.isBalanced() ? "Yes" : "No");

// Rebalance the tree
tree.rebalance();
console.log("\nBST after rebalancing:");
prettyPrint(tree.root);
console.log("Is the tree balanced after rebalancing?", tree.isBalanced() ? "Yes" : "No");

// Re-traverse the tree after rebalancing
console.log("\nLevel Order after rebalancing:");
tree.levelOrder((node) => console.log(node.data));

console.log("\nPre Order after rebalancing:");
tree.preOrder((node) => console.log(node.data));

console.log("\nIn Order after rebalancing:");
tree.inOrder((node) => console.log(node.data));

console.log("\nPost Order after rebalancing:");
tree.postOrder((node) => console.log(node.data));

// Test Height & Depth
const nodeToCheck = tree.find(150);
if (nodeToCheck) {
    console.log(`\nHeight of node 150: ${tree.height(nodeToCheck)}`);
    console.log(`Depth of node 150: ${tree.depth(nodeToCheck)}`);
} else {
    console.log("\nNode 150 not found.");
}

// Test Find Method
console.log("\nFinding 200:", tree.find(200) !== null ? "Found" : "Not Found");
console.log("Finding 500:", tree.find(500) !== null ? "Found" : "Not Found");

// Deletion Tests
tree.deleteItem(150);
console.log("\nBST after deleting 150:");
prettyPrint(tree.root);

tree.deleteItem(200);
console.log("\nBST after deleting 200:");
prettyPrint(tree.root);
