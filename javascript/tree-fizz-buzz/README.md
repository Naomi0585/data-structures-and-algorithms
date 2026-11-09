# Tree Fizz Buzz

## Summary

This challenge involves traversing a k-ary tree and creating a new tree with the same structure while converting node values according to the FizzBuzz rules.

## Description

Create a function called `fizzBuzzTree` that accepts a k-ary tree and returns a new k-ary tree.

- Numbers divisible by 3 become "Fizz".
- Numbers divisible by 5 become "Buzz".
- Numbers divisible by both 3 and 5 become "FizzBuzz".
- All other numbers become strings.

The original tree must remain unchanged.

## Approach & Efficiency

I used recursion to traverse the original tree. For each node, I created a new node containing the converted value and recursively processed its children.

This preserves the original structure while creating a separate tree.

**Time Complexity:** O(n), because each node is visited once.

**Space Complexity:** O(n), because the new tree contains the same number of nodes as the original tree.

## Solution

Example:

Original tree values:

`15, 3, 7, 5, 9, 10`

Converted values:

`FizzBuzz, Fizz, "7", Buzz, Fizz, Buzz`

## Whiteboard

![Tree Fizz Buzz Whiteboard](./assets/whiteboard.png)

## Code

[View Implementation](./index.js)

## Tests

[View Jest Tests](./fizz-buzz-tree.test.js)

Tests cover normal conversions, empty trees, single nodes, nested children, preservation of the original tree, and null input.
