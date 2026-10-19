
'use strict';

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the beginning
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Append a new node at the end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Check if a value exists in the linked list
  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Convert the linked list into a string
  toString() {
    let current = this.head;
    let result = '';

    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }

    return result + 'NULL';
  }

  // Find the kth node from the end
  kthFromEnd(k) {
    if (!Number.isInteger(k) || k < 0) {
      throw new Error('k must be a non-negative integer');
    }

    let slow = this.head;
    let fast = this.head;

    if (!fast) {
      throw new Error('Linked list is empty');
    }

    // Move fast pointer k positions ahead
    for (let i = 0; i < k; i++) {
      fast = fast.next;

      if (!fast) {
        throw new Error('k is out of range');
      }
    }

    // Move both pointers until fast reaches the end
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    // Return the kth value from the end
    return slow.value;
  }

  // Stretch Goal: Find the middle node
  findMiddle() {
    if (!this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }
}

// Export classes for Jest testing
module.exports = {
  Node,
  LinkedList,
};
