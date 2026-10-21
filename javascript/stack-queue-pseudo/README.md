# Code Challenge: Stack Queue Pseudo

## Summary

Implement a Queue using two Stacks instead of using an existing Queue class.

## Description

The goal of this challenge is to create a `PseudoQueue` class that follows the First In, First Out (FIFO) principle while using two Stack instances that follow Last In, First Out (LIFO).

## Approach & Efficiency

I used two Stacks to manage the queue.

- `stack1` stores newly added values.
- `stack2` stores values in the correct order for removal.
- `enqueue()` pushes values into `stack1`.
- `dequeue()` transfers values from `stack1` to `stack2` when necessary, then removes the top value from `stack2`.

This allows the oldest value to be removed first.

### Big O

- Enqueue: O(1) time
- Dequeue: O(n) worst-case time, O(1) amortized time
- Space: O(n)

## Whiteboard Process

![PseudoQueue Whiteboard](./stack-queue-pseudo-whiteboard.png)

## Solution

The solution uses a `PseudoQueue` class with two methods:

- `enqueue(value)`
- `dequeue()`

[View implementation](./pseudo-queue.js)

## Testing

I wrote Jest tests to verify:

- Creating an empty PseudoQueue
- Enqueuing one value
- Enqueuing multiple values
- Dequeuing in FIFO order
- Enqueuing after dequeuing
- Throwing an error when dequeuing an empty queue
- Reusing a queue after it becomes empty

[View tests](./pseudo-queue.test.js)
