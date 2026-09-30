# Singly Linked List

## Challenge

Create a singly linked list implementation using Node and LinkedList
classes.

The LinkedList class contains methods to insert nodes, search for
values, and return the contents of the list as a formatted string.

## Approach & Efficiency

### insert(value)

Adds a new Node to the head of the linked list.

- Time: O(1)
- Space: O(1)

### includes(value)

Traverses the linked list looking for a matching value.

- Time: O(n)
- Space: O(1)

### toString()

Traverses the linked list and creates a formatted string containing
all Node values.

- Time: O(n)
- Space: O(n)

## API

### insert(value)

Adds a Node containing the provided value to the head of the list.

### includes(value)

Returns true if the value exists in the linked list and false
otherwise.

### toString()

Returns the linked list in the following format:

{ a } -> { b } -> { c } -> NULL

## Solution

![Linked List Whiteboard](listwhiteboard.png)

## Tests

Tests verify:

- Empty linked list creation
- Single node insertion
- Head assignment
- Multiple node insertion
- Finding an existing value
- Searching for a missing value
- String representation
- Empty-list behavior
