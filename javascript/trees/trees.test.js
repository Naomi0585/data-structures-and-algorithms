
const {
  Node,
  BinaryTree,
  BinarySearchTree,
} = require('./index');

describe('Trees Implementation', () => {

  test('Can instantiate an empty tree', () => {
    const tree = new BinaryTree();

    expect(tree.root).toBeNull();
  });

  test('Can instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(new Node(10));

    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test('Can add a left and right child correctly', () => {
    const bst = new BinarySearchTree();

    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('Can return pre-order traversal', () => {
    const bst = createTestTree();

    expect(bst.preOrder()).toEqual([
      10, 5, 3, 7, 15, 12, 18
    ]);
  });

  test('Can return in-order traversal', () => {
    const bst = createTestTree();

    expect(bst.inOrder()).toEqual([
      3, 5, 7, 10, 12, 15, 18
    ]);
  });

  test('Can return post-order traversal', () => {
    const bst = createTestTree();

    expect(bst.postOrder()).toEqual([
      3, 7, 5, 12, 18, 15, 10
    ]);
  });

  test('Contains returns true for an existing value', () => {
    const bst = createTestTree();

    expect(bst.contains(7)).toBe(true);
  });

  test('Contains returns false for a missing value', () => {
    const bst = createTestTree();

    expect(bst.contains(100)).toBe(false);
  });

  test('Empty tree traversals return empty arrays', () => {
    const tree = new BinaryTree();

    expect(tree.preOrder()).toEqual([]);
    expect(tree.inOrder()).toEqual([]);
    expect(tree.postOrder()).toEqual([]);
  });

  test('Can add duplicate values', () => {
    const bst = new BinarySearchTree();

    bst.add(10);
    bst.add(10);

    expect(bst.root.right.value).toBe(10);
    expect(bst.contains(10)).toBe(true);
  });

  test('Invalid BST values throw descriptive errors', () => {
    const bst = new BinarySearchTree();

    expect(() => bst.add('hello')).toThrow(TypeError);
    expect(() => bst.contains(NaN)).toThrow(
      'BST contains requires a finite number.'
    );
  });

});

// Helper function to create a reusable test tree
function createTestTree() {
  const bst = new BinarySearchTree();

  bst.add(10);
  bst.add(5);
  bst.add(15);
  bst.add(3);
  bst.add(7);
  bst.add(12);
  bst.add(18);

  return bst;
}
