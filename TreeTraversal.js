class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }

}

class TreeTraversal {
    // Left
    // Print
    // Right
    inorder(node) {
        if (node == null) {
            return;

        }
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);

    }

    // Print
    // Left
    // Right
    preorder(node) {
        if (node == null) {
            return;

        }
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);

    }

    // Left
    // Right
    // Print
    postorder(node) {
        if (node == null) {
            return;

        }
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);

    }

    insertNode(data) {
        var newNode = new Node(data);
        return newNode;

    }

}


var treeTraversal = new TreeTraversal();
var root = treeTraversal.insertNode("Les");
root.left = treeTraversal.insertNode("Cathy");
root.left.left = treeTraversal.insertNode("Alex");
root.left.right = treeTraversal.insertNode("Frank");
root.right = treeTraversal.insertNode("Sam");
root.right.left = treeTraversal.insertNode("Nancy");
root.right.right = treeTraversal.insertNode("Violet");
root.right.right.left = treeTraversal.insertNode("Tony");
root.right.right.right = treeTraversal.insertNode("Wendy");

treeTraversal.inorder(root);
treeTraversal.preorder(root);
treeTraversal.postorder(root);       

















