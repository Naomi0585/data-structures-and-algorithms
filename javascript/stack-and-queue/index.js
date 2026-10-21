'use strict';

const { Stack, Queue } = require('./stack-and-queue');

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Stack top:', stack.peek());
console.log('Stack pop:', stack.pop());
console.log('Stack empty?', stack.isEmpty());

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Queue front:', queue.peek());
console.log('Queue dequeue:', queue.dequeue());
console.log('Queue empty?', queue.isEmpty());
