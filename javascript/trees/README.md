# Trees

## Challenge

Implement a Binary Tree and a Binary Search Tree in JavaScript.

The Binary Tree supports three depth-first traversals: pre-order, in-order, and post-order.

The Binary Search Tree extends the Binary Tree and supports adding values and checking whether a value exists.

## Whiteboard Process

![Trees Whiteboard](./whiteboard.png)

## Approach & Efficiency

I used classes to organize the implementation and recursion to perform the three tree traversals.

The Binary Search Tree uses comparisons to determine where to insert values and how to search for existing values.

**Time Complexity:**
- Traversals: O(n)
- BST insertion: O(h)
- BST search: O(h)

**Space Complexity:**
- Traversals: O(n) including the returned array
- Iterative BST insertion and search: O(1) auxiliary space

The tree height is represented by h. A balanced BST has O(log n) height, while an unbalanced BST can have O(n) height.

## Solution

The implementation is located in `index.js`.

The classes are:

- `Node`
- `BinaryTree`
- `BinarySearchTree`

## Testing

Tests are located in `trees.test.js`.

The tests verify empty trees, root nodes, left and right children, three traversal orders, and successful and unsuccessful searches.

Additional tests cover empty traversals, duplicate values, and invalid inputs.

Run the tests with:

`npx jest trees/trees.test.js --runInBand --verbose`

## Resources

- Code 401 Trees assignment
- JavaScript documentation
- Jest documentation
