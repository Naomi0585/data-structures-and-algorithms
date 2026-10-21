# Stacks and Queues

## Challenge

Implement a Stack and a Queue using a Linked List as the underlying data storage mechanism.

## Approach & Efficiency

I created a Node class to store values and connect nodes. I then created separate Stack and Queue classes with methods to add, remove, view, and check values.

### Stack

A Stack follows the Last In, First Out (LIFO) principle.

- `push(value)` - Adds a new node to the top.
- `pop()` - Removes and returns the top value.
- `peek()` - Returns the top value without removing it.
- `isEmpty()` - Checks if the stack is empty.

### Queue

A Queue follows the First In, First Out (FIFO) principle.

- `enqueue(value)` - Adds a node to the back.
- `dequeue()` - Removes and returns the front value.
- `peek()` - Returns the front value without removing it.
- `isEmpty()` - Checks if the queue is empty.

## Big O

| Operation | Time | Space |
|---|---|---|
| Stack push | O(1) | O(1) |
| Stack pop | O(1) | O(1) |
| Stack peek | O(1) | O(1) |
| Queue enqueue | O(1) | O(1) |
| Queue dequeue | O(1) | O(1) |
| Queue peek | O(1) | O(1) |

Each insertion creates one node, using O(1) additional space. Storing n values requires O(n) total space.

## Testing

I used Jest to test the Stack and Queue functionality, including inserting values, removing values, checking the next value, creating empty structures, and handling errors.

All 14 required test scenarios are included.

## Whiteboard

Add the whiteboard diagram image here.

![Stack and Queue Whiteboard](./stack-queue-whiteboard.png)
