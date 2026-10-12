
'use strict';

const { LinkedList } = require('./index');

describe('Linked List Insertions', () => {

  test('Can append a node to the end', () => {
    const list = new LinkedList();

    list.append(10);

    expect(list.toArray()).toEqual([10]);
  });

  test('Can append multiple nodes', () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('Can insert before a middle node', () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);

    list.insertBefore(20, 15);

    expect(list.toArray()).toEqual([10, 15, 20, 30]);
  });

  test('Can insert before the first node', () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);

    list.insertBefore(10, 5);

    expect(list.toArray()).toEqual([5, 10, 20]);
  });

  test('Can insert after a middle node', () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);

    list.insertAfter(20, 25);

    expect(list.toArray()).toEqual([10, 20, 25, 30]);
  });

  test('Can insert after the last node', () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);

    list.insertAfter(30, 40);

    expect(list.toArray()).toEqual([10, 20, 30, 40]);
  });

});
