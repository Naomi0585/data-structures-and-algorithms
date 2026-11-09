
const breadthFirst = require('./breadth-first');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe('Breadth First Traversal', () => {

  test('Happy Path: returns values level by level', () => {
    const tree = {
      root: new Node(
        1,
        new Node(2, new Node(4), new Node(5)),
        new Node(3, new Node(6), new Node(7))
      ),
    };

    expect(breadthFirst(tree)).toEqual(
      [1, 2, 3, 4, 5, 6, 7]
    );
  });

  test('Expected Failure: handles an empty tree', () => {
    const tree = { root: null };

    expect(breadthFirst(tree)).toEqual([]);
  });

  test('Edge Case: handles a single node', () => {
    const tree = {
      root: new Node(10),
    };

    expect(breadthFirst(tree)).toEqual([10]);
  });

  test('Edge Case: handles missing children', () => {
    const tree = {
      root: new Node(
        1,
        new Node(2, null, new Node(4)),
        new Node(3)
      ),
    };

    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4]);
  });

  test('Handles null input', () => {
    expect(breadthFirst(null)).toEqual([]);
  });

});
