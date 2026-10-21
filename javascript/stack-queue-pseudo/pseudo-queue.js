'use strict';

const { Stack } = require('../stack-and-queue/stack-and-queue');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.top === null) {
      while (this.stack1.top !== null) {
        this.stack2.push(this.stack1.pop());
      }
    }

    if (this.stack2.top === null) {
      throw new Error('Cannot dequeue from an empty queue');
    }

    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
