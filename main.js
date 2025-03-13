import { Tree, Node, prettyPrint } from './BST.js';

const generateRandomNumbers = (count, max) => {
    const numbers = new Set();
    while(numbers.size < count){
        numbers.add(Math.floor(Math.random() * max));
    }
    return Array.from(numbers);
};

const randomNumbers = generateRandomNumbers(15, 100);
const tree = new Tree(randomNumbers);
prettyPrint(tree.root);

console.log("Is the tree balanced?", tree.isBalanced());

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre Order:");
tree.preOrder((node) => console.log(node.data));

console.log("Post Order:");
tree.postOrder((node) => console.log(node.data));

tree.insert(150);
tree.insert(200);
tree.insert(250);
prettyPrint(tree.root);

console.log("Is the tree balanced after adding large numbers?", tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);

console.log("Is the tree balanced after rebalancing?", tree.isBalanced());

console.log("Level Order after rebalancing:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre Order after rebalancing:");
tree.preOrder((node) => console.log(node.data));

console.log("In Order after rebalancing:");
tree.inOrder((node) => console.log(node.data));

console.log("Post Order after rebalancing:");
tree.postOrder((node) => console.log(node.data));