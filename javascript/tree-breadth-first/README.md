# Tree Breadth First

## Summary

This challenge involves traversing a binary tree using the breadth-first approach and returning an array of values in the order they are visited.

## Description

Create a function called `breadthFirst` that accepts a binary tree as an argument and returns the values level by level, from left to right.

## Approach & Efficiency

I used a queue to keep track of the nodes that needed to be visited. The function starts with the root node, adds its value to an array, and then adds its left and right children to the queue. This continues until every node has been visited.

**Big O:**
- Time Complexity: O(n), because every node is visited once.
- Space Complexity: O(n), because the queue and result array can contain up to n values.

## Solution

Example input:

```text
       1
      / \
     2   3
    / \
   4   5
```

Expected output:

`[1, 2, 3, 4, 5]`

## Whiteboard

![Tree Breadth First Whiteboard](./assets/whiteboard.png)

## Code

[View Implementation](./breadth-first.js)

## Tests

[View Tests](./breadth-first.test.js)

The tests cover successful traversal, empty trees, single-node trees, missing children, and null input.
