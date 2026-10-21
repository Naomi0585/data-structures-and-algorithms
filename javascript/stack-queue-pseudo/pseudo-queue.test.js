'use strict';

const PseudoQueue = require('./pseudo-queue');

describe('PseudoQueue', () => {

  test('Can create an empty pseudo queue', () => {
    const queue = new PseudoQueue();

    expect(queue.stack1.top).toBeNull();
    expect(queue.stack2.top).toBeNull();
  });

  test('Can enqueue one value', () => {
    const queue = new PseudoQueue();

    queue.enqueue(10);

    expect(queue.dequeue()).toBe(10);
  });

  test('Can enqueue multiple values', () => {
    const queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('Can dequeue in FIFO order', () => {
    const queue = new PseudoQueue();

    queue.enqueue(5);
    queue.enqueue(10);

    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(10);
  });

  test('Can enqueue after dequeue', () => {
    const queue = new PseudoQueue();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.dequeue()).toBe(10);

    queue.enqueue(30);

    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('Cannot dequeue from an empty queue', () => {
    const queue = new PseudoQueue();

    expect(() => queue.dequeue()).toThrow(
      'Cannot dequeue from an empty queue'
    );
  });

  test('Can reuse a queue after emptying it', () => {
    const queue = new PseudoQueue();

    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);

    queue.enqueue(20);
    expect(queue.dequeue()).toBe(20);
  });

});
