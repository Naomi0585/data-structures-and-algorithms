'use strict';

const {
  LinkedList,
  zipLists,
} = require('./index');

describe('Linked List Zip', () => {

  test('Zips two lists of equal length', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    [5, 3, 1].forEach(value => list1.insert(value));
    [6, 4, 2].forEach(value => list2.insert(value));

    const result = zipLists(list1, list2);

    expect(result.toString())
      .toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  test('Zips lists when first list is longer', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    [5, 3, 1].forEach(value => list1.insert(value));
    [2].forEach(value => list2.insert(value));

    const result = zipLists(list1, list2);

    expect(result.toString())
      .toBe('{ 1 } -> { 2 } -> { 3 } -> { 5 } -> NULL');
  });

  test('Zips lists when second list is longer', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    [1].forEach(value => list1.insert(value));
    [6, 4, 2].forEach(value => list2.insert(value));

    const result = zipLists(list1, list2);

    expect(result.toString())
      .toBe('{ 1 } -> { 2 } -> { 4 } -> { 6 } -> NULL');
  });

  test('Returns second list when first is empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list2.insert(2);

    const result = zipLists(list1, list2);

    expect(result.head.value).toBe(2);
  });

  test('Returns first list when second is empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(1);

    const result = zipLists(list1, list2);

    expect(result.head.value).toBe(1);
  });

  test('Handles two empty lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = zipLists(list1, list2);

    expect(result.head).toBeNull();
  });

});
