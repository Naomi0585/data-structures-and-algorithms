
'use strict';

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Inserts a new node at the beginning of the list.
   * @param {*} value - Value to insert.
   */
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Adds a new node to the end of the list.
   * @param {*} newValue - Value to append.
   */
  append(newValue) {
    const newNode = new Node(newValue);

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

  /**
   * Inserts a new node before the first matching value.
   * @param {*} value - Value to find.
   * @param {*} newValue - Value to insert.
   * @returns {boolean}
   */
  insertBefore(value, newValue) {
    if (!this.head) {
      return false;
    }

    // If the matching node is the head
    if (this.head.value === value) {
      this.insert(newValue);
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        const newNode = new Node(newValue);

        newNode.next = current.next;
        current.next = newNode;

        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * Inserts a new node after the first matching value.
   * @param {*} value - Value to find.
   * @param {*} newValue - Value to insert.
   * @returns {boolean}
   */
  insertAfter(value, newValue) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);

        newNode.next = current.next;
        current.next = newNode;

        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * Converts the linked list into an array for testing.
   * @returns {Array}
   */
  toArray() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}

// Export classes for Jest testing
module.exports = { Node, LinkedList };
