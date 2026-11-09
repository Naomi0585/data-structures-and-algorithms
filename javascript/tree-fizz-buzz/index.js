
'use strict';

// A node can have multiple children
class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// K-ary tree
class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

// Convert a number using FizzBuzz rules
function fizzBuzz(value) {
  if (value % 15 === 0) {
    return 'FizzBuzz';
  }

  if (value % 3 === 0) {
    return 'Fizz';
  }

  if (value % 5 === 0) {
    return 'Buzz';
  }

  return String(value);
}

// Create a new tree with FizzBuzz values
function fizzBuzzTree(tree) {
  if (!tree || !tree.root) {
    return new KaryTree();
  }

  function traverse(node) {
    const newNode = new KaryNode(fizzBuzz(node.value));

    for (const child of node.children) {
      newNode.children.push(traverse(child));
    }

    return newNode;
  }

  return new KaryTree(traverse(tree.root));
}

module.exports = {
  KaryNode,
  KaryTree,
  fizzBuzzTree,
};
