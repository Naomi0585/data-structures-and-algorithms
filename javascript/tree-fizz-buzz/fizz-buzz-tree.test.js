
'use strict';

const {
  KaryNode,
  KaryTree,
  fizzBuzzTree,
} = require('./index');

describe('Tree Fizz Buzz', () => {

  test('Happy Path: converts values correctly', () => {
    const root = new KaryNode(15);

    root.children = [
      new KaryNode(3),
      new KaryNode(5),
      new KaryNode(7),
    ];

    const tree = new KaryTree(root);
    const result = fizzBuzzTree(tree);

    expect(result.root.value).toBe('FizzBuzz');
    expect(result.root.children[0].value).toBe('Fizz');
    expect(result.root.children[1].value).toBe('Buzz');
    expect(result.root.children[2].value).toBe('7');
  });

  test('Expected Failure: empty tree', () => {
    const tree = new KaryTree();

    const result = fizzBuzzTree(tree);

    expect(result.root).toBeNull();
  });

  test('Edge Case: single node', () => {
    const tree = new KaryTree(new KaryNode(9));

    const result = fizzBuzzTree(tree);

    expect(result.root.value).toBe('Fizz');
  });

  test('Edge Case: preserves tree structure', () => {
    const root = new KaryNode(1);
    const child = new KaryNode(10);

    child.children.push(new KaryNode(6));
    root.children.push(child);

    const result = fizzBuzzTree(new KaryTree(root));

    expect(result.root.value).toBe('1');
    expect(result.root.children[0].value).toBe('Buzz');
    expect(result.root.children[0].children[0].value)
      .toBe('Fizz');
  });

  test('Does not modify original tree', () => {
    const root = new KaryNode(15);
    root.children.push(new KaryNode(3));

    const tree = new KaryTree(root);
    const result = fizzBuzzTree(tree);

    expect(tree.root.value).toBe(15);
    expect(tree.root.children[0].value).toBe(3);

    expect(result).not.toBe(tree);
    expect(result.root).not.toBe(tree.root);
  });

  test('Handles null input', () => {
    const result = fizzBuzzTree(null);

    expect(result.root).toBeNull();
  });

});
