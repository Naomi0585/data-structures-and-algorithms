
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue() {
    if (this.root === null) {
      return null;
    }

    let max = this.root.value;

    function traverse(node) {
      if (node === null) {
        return;
      }

      if (node.value > max) {
        max = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return max;
  }
}

module.exports = { Node, BinaryTree };
