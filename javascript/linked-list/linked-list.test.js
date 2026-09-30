'use strict';

const { LinkedList } = require('./linked-list');

describe('Singly Linked List', () => {

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

});

test('Can properly insert into the linked list', () => {
  const list = new LinkedList();

  list.insert(10);

  expect(list.head.value).toBe(10);
});

test('Head properly points to the first node', () => {
  const list = new LinkedList();

  list.insert(10);
  list.insert(20);

  expect(list.head.value).toBe(20);
});

test('Can properly insert multiple nodes', () => {
  const list = new LinkedList();

  list.insert(10);
  list.insert(20);
  list.insert(30);

  expect(list.head.value).toBe(30);
  expect(list.head.next.value).toBe(20);
  expect(list.head.next.next.value).toBe(10);
});

test('Returns true when finding an existing value', () => {
  const list = new LinkedList();

  list.insert(10);
  list.insert(20);
  list.insert(30);

  expect(list.includes(20)).toBe(true);
});

test('Returns false when value does not exist', () => {
  const list = new LinkedList();

  list.insert(10);
  list.insert(20);
  list.insert(30);

  expect(list.includes(100)).toBe(false);
});

test('Can return all values as a formatted string', () => {
  const list = new LinkedList();

  list.insert(30);
  list.insert(20);
  list.insert(10);

  expect(list.toString()).toBe(
    '{ 10 } -> { 20 } -> { 30 } -> NULL'
  );
});

test('Returns NULL for an empty linked list', () => {
  const list = new LinkedList();

  expect(list.toString()).toBe('NULL');
});
