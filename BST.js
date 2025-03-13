export class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree{
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array){
        if(array.length === 0) return null;
        let new_array = [...new Set(array)];
        new_array.sort((a, b) => a- b);
        let middle_index = Math.floor(new_array.length / 2);
        let root_node = new Node(new_array[middle_index]);

        root_node.left = this.buildTree(new_array.slice(0, middle_index));
        root_node.right = this.buildTree(new_array.slice(middle_index + 1));
        return root_node;
    }

    insert(value){
        if(this.root === null){
            this.root = new Node(value);
            return;
        }
        let current_node = this.root;
        let parent_node = null;
        while(current_node !== null){
            if(current_node.data > value){
               parent_node = current_node;
               current_node = current_node.left;
               
            }
            else{
                parent_node = current_node;
                current_node = current_node.right;
                
            }
        }
        let new_node = new Node(value);
        if(value < parent_node.data){
            parent_node.left = new_node;
            return;
        }
        else{
            parent_node.right = new_node;
            return;
        }
        
    }

    deleteItem(value){
        if(this.root === null){
            return;
        }
        let current_node = this.root;
        
        let parent_node = null;
        while(current_node !== null && current_node.data !== value){
            parent_node = current_node;
            if(current_node.data > value){
                current_node = current_node.left;
            }
            else{
                current_node = current_node.right;
            }
        }

        if(current_node === null){
            return;
        }

        if(current_node.left === null && current_node.right === null){
            if(parent_node.left === current_node){
                parent_node.left = null;
            }
            else{
                parent_node.right = null;
            }
        }
        else if(current_node.left === null || current_node.right === null){
            const child_node = current_node.left || current_node.right;
            if(parent_node.left === current_node){
                parent_node.left = child_node;
            }
            else{
                parent_node.right = child_node
            }
        }
        else{
            let successor_parent = current_node;
            let successor = current_node.right;
            while(successor.left !== null){
                successor_parent = successor;
                successor = successor.left;
            }

            current_node.data = successor.data;
            if(successor_parent.left === successor){
                successor_parent.left = successor.right;
            }
            else{
                successor_parent.right = successor.right;
            }
        }
    }

    find(value){
        if(this.root === null){
            return;
        }
        let current_node = this.root;
        while(current_node !== null && current_node.data !== value){
            if(current_node.data > value){
                current_node = current_node.left;
            }
            else if(current_node.data < value){
                current_node = current_node.right;
            }
        }
        return current_node;
    }

    levelOrder(callback){
        if(!callback){
            throw new Error("Callback function is required");
        }
        if(this.root === null){
            return;
        }

        const queue = [this.root];
        while(queue.length > 0){
            let current_node = queue.shift();
            callback(current_node);
            
            if(current_node.left !== null){
                queue.push(current_node.left);
            }
            if(current_node.right !== null){
                queue.push(current_node.right);
            }
        }
    }

    inOrder(callback){
        if(!callback){
            throw new Error("Callback function is required");
        }
        if(this.root === null){
            return;
        }

        const traverse = (node) => {
            if(node === null){
                return;
            }
            traverse(node.left);
            callback(node);
            traverse(node.right);
        }

        traverse(this.root);
    }

    preOrder(callback){
        if(!callback){
            throw new Error("Callback function is required");
        }
        if(this.root === null){
            return;
        }

        const traverse = (node) => {
            if(node === null){
                return;
            }
            callback(node);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(this.root);
    }

    postOrder(callback){
        if(!callback){
            throw new Error("Callback function is required");
        }
        if(this.root === null){
            return;
        }

        const traverse = (node) => {
            if(node === null){
                return;
            }
            traverse(node.left);
            traverse(node.right);
            callback(node);
        }

        traverse(this.root);
    }

    height(node){
        if(node === null){
            return -1;
        }
       const leftHeight = this.height(node.left);
       const rightHeight = this.height(node.right);
       return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node){
        if(node === null){
            return -1;
        }
        let current_node = this.root;
        let depth = 0;

        while(current_node !== null && current_node !== node){
            if(node.data < current_node.data){
                current_node = current_node.left;
            }
            else{
                current_node = current_node.right;
            }
            depth++;
        }
        if(current_node === node){
            return depth;
        }
        else{
            return -1;
        }
    }

    isBalanced(){
        const balance = (node) => {
            if(node === null){
                return true;
            }
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right);

            if(Math.abs(leftHeight - rightHeight) > 1){
                return false;
            }

            return balance(node.left) && balance(node.right);
        };
       
        return balance(this.root);     
    }

    rebalance(){
        const values = [];
        this.inOrder((node) => {
            values.push(node.data)
        });
        this.root = this.buildTree(values);
    }
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
 };

