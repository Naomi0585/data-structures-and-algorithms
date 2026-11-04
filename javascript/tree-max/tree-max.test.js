
'use strict';

const { Node, BinaryTree } = require('./index');

describe('Binary Tree - Find Maximum Value', () => {

  test('returns the maximum value in a tree', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(8);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(30);

    expect(tree.findMaximumValue()).toBe(30);
  });

  test('returns null for an empty tree', () => {
    const tree = new BinaryTree();

    expect(tree.findMaximumValue()).toBeNull();
  });

  test('returns the value for a single node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(42);

    expect(tree.findMaximumValue()).toBe(42);
  });

  test('works with negative numbers', () => {
    const tree = new BinaryTree();

    tree.root = new Node(-10);
    tree.root.left = new Node(-5);
    tree.root.right = new Node(-20);

    expect(tree.findMaximumValue()).toBe(-5);
  });

  test('finds maximum in the left subtree', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);
    tree.root.left = new Node(100);
    tree.root.right = new Node(20);

    expect(tree.findMaximumValue()).toBe(100);
  });

  test('works with duplicate values', () => {
    const tree = new BinaryTree();

    tree.root = new Node(7);
    tree.root.left = new Node(7);
    tree.root.right = new Node(7);

    expect(tree.findMaximumValue()).toBe(7);
  });

});
