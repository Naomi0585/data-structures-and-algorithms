'use strict';

const { LinkedList } = require('./index');

describe('Linked List Kth From End', () => {

  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('Returns correct value in the middle', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);
    list.append(50);

    expect(list.kthFromEnd(2)).toBe(30);
  });

  test('Returns last node when k is 0', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.kthFromEnd(0)).toBe(30);
  });

  test('Throws error when k is greater than length', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(() => list.kthFromEnd(5)).toThrow();
  });

  test('Throws error when k equals list length', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(() => list.kthFromEnd(3)).toThrow();
  });

  test('Throws error when k is negative', () => {
    list.append(10);
    list.append(20);

    expect(() => list.kthFromEnd(-1)).toThrow();
  });

  test('Throws error when k is not an integer', () => {
    list.append(10);
    list.append(20);

    expect(() => list.kthFromEnd(1.5)).toThrow();
  });

  test('Works with a single node', () => {
    list.append(100);

    expect(list.kthFromEnd(0)).toBe(100);
  });

  test('Throws error for empty linked list', () => {
    expect(() => list.kthFromEnd(0)).toThrow();
  });

  test('Returns head when k is length minus one', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.kthFromEnd(2)).toBe(10);
  });

});
