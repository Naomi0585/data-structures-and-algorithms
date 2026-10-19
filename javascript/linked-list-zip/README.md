# Linked List Zip

## Code Challenge

Write a function called `zipLists` that takes two linked lists and combines them into one linked list by alternating nodes.

## Whiteboard Process

![Linked List Zip Whiteboard](./whiteboard.png)

## Approach & Efficiency

I used two pointers to move through both linked lists. The function alternates nodes by changing their `next` references. If one list is longer, the remaining nodes stay connected at the end.

- **Time Complexity:** O(n + m), where n and m represent the lengths of the linked lists.
- **Space Complexity:** O(1), because the function reuses existing nodes instead of creating new ones.

## Solution

**Input:**

- List 1: 1 → 3 → 5
- List 2: 2 → 4 → 6

**Output:**

1 → 2 → 3 → 4 → 5 → 6

## Tests

The Jest tests cover:

- Two lists of equal length
- First list longer than the second
- Second list longer than the first
- Empty first list
- Empty second list
- Both lists empty

All tests should pass before submitting the challenge.
