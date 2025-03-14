# 🌲 Balanced Binary Search Tree (BST) Implementation

## 📌 Overview
This project implements a **Balanced Binary Search Tree (BST)** in JavaScript using ES6 modules. The BST includes fundamental operations like **insertion, deletion, traversal, rebalancing**, and more.

## ⚡ Features
- 📌 **Binary Search Tree Construction** from a sorted array
- 🔍 **Insert & Delete Operations** to maintain the BST structure
- 🔄 **Automatic Rebalancing** for optimal search efficiency
- 🌳 **Tree Traversals:** Level-order, Pre-order, In-order, Post-order
- 📏 **Height & Depth Calculation**
- 🏗️ **Tree Visualization with `prettyPrint`**

## 📂 Project Structure
```
📦 BST-Project
 ┣ 📜 BST.js        # BST implementation
 ┣ 📜 main.js       # Driver code & test cases
 ┣ 📜 README.md     # Project documentation
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/BST-Project.git
cd BST-Project
```
### 2️⃣ Run the Code
Ensure you have **Node.js** installed, then execute:
```sh
node main.js
```

## 📜 Usage & Examples
### 🔹 Creating a BST
```js
import { Tree, prettyPrint } from './BST.js';
const tree = new Tree([10, 20, 30, 40, 50, 60, 70]);
prettyPrint(tree.root);
```
### 🔹 Inserting Values
```js
tree.insert(25);
tree.insert(35);
```
### 🔹 Deleting a Node
```js
tree.deleteItem(30);
```
### 🔹 Traversal Methods
```js
tree.inOrder(node => console.log(node.data));
tree.preOrder(node => console.log(node.data));
tree.postOrder(node => console.log(node.data));
tree.levelOrder(node => console.log(node.data));
```
### 🔹 Rebalancing the Tree
```js
tree.rebalance();
```

## 📊 Output Example
```
Is the tree balanced? true
Level Order: 10 20 30 40 50 60 70
Pre Order: 40 20 10 30 60 50 70
Post Order: 10 30 20 50 70 60 40
```

## 🛠️ Technologies Used
- **JavaScript (ES6 modules)** 📜
- **Node.js (for execution)** 🚀

## 🏆 Contributing
Pull requests are welcome! Feel free to contribute by improving the logic, fixing bugs, or adding new features.

## 📝 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---
💡 *Happy Coding! Keep growing your Data Structures & Algorithms skills!* 🚀