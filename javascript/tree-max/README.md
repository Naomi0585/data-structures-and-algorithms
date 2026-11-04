
# Tree Max

## Summary

This challenge requires finding the maximum numeric value
stored in a Binary Tree.

## Description

Create a method called findMaximumValue() for the
BinaryTree class.

The method takes no arguments and returns the largest
number found in the tree.

## Whiteboard Process

![Tree Max Whiteboard](./assets/tree-max-whiteboard.png)

## Approach & Efficiency

I used a recursive depth-first traversal to visit every
node in the Binary Tree.

1. Check if the tree is empty.
2. Initialize the maximum with the root's value.
3. Visit every node recursively.
4. Compare each node's value to the current maximum.
5. Update the maximum whenever a larger number is found.
6. Return the maximum after traversal.

### Big O

- Time Complexity: O(n), because every node is visited.
- Space Complexity: O(h), where h is the height of the tree.
- A balanced tree uses O(log n) recursive stack space.
- A skewed tree uses O(n) recursive stack space.

## Solution

Example Binary Tree:

        10
       /  \
      5    20
     / \   / \
    2   8 15  30

Expected output:

    30

### Running Tests

From the javascript directory:

    npx jest tree-max/tree-max.test.js --runInBand

### Test Cases

- Normal tree with multiple values
- Empty tree
- Single-node tree
- Negative numbers
- Maximum value in the left subtree
- Duplicate values

## Code

[View Implementation](./index.js)

[View Tests](./tree-max.test.js)
