'use strict';

const PseudoQueue = require('./pseudo-queue');

const queue = new PseudoQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('First dequeue:', queue.dequeue());
console.log('Second dequeue:', queue.dequeue());

queue.enqueue(40);

console.log('Third dequeue:', queue.dequeue());
console.log('Fourth dequeue:', queue.dequeue());
