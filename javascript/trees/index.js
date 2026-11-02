
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const results = [];

    const traverse = (node) => {
      if (node === null) return;

      results.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      results.push(node.value);
      traverse(node.right);
    };

    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      results.push(node.value);
    };

    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }

  add(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError('BST add requires a finite number.');
    }

    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }

        current = current.right;
      }
    }
  }

  contains(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError('BST contains requires a finite number.');
    }

    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};

