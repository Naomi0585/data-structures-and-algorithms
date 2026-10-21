'use strict';

const { Stack, Queue } = require('./stack-and-queue');

describe('Stack', () => {

  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();

    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully push onto a stack', () => {
    const stack = new Stack();

    stack.push(10);

    expect(stack.top.value).toBe(10);
  });

  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.top.value).toBe(30);
    expect(stack.top.next.value).toBe(20);
    expect(stack.top.next.next.value).toBe(10);
  });

  test('Can successfully pop off the stack', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);

    expect(stack.pop()).toBe(20);
    expect(stack.top.value).toBe(10);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);

    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.top.value).toBe(20);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();

    expect(() => stack.pop()).toThrow(
      'Cannot pop from an empty stack'
    );

    expect(() => stack.peek()).toThrow(
      'Cannot peek at an empty stack'
    );
  });

});

describe('Queue', () => {

  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();

    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();

    queue.enqueue(10);

    expect(queue.front.value).toBe(10);
    expect(queue.back.value).toBe(10);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.front.value).toBe(10);
    expect(queue.front.next.value).toBe(20);
    expect(queue.back.value).toBe(30);
  });

  test('Can successfully dequeue out of a queue', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.dequeue()).toBe(10);
    expect(queue.front.value).toBe(20);
  });

  test('Can successfully peek into a queue', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.peek()).toBe(10);
    expect(queue.front.value).toBe(10);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();

    expect(() => queue.dequeue()).toThrow(
      'Cannot dequeue from an empty queue'
    );

    expect(() => queue.peek()).toThrow(
      'Cannot peek at an empty queue'
    );
  });

});
