
const insertionSort = require('./insertion-sort');

describe('Insertion Sort', () => {
  test('sorts the sample array', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const expected = [4, 8, 15, 16, 23, 42];

    expect(insertionSort(input)).toEqual(expected);
  });

  test('sorts a reverse-sorted array', () => {
    const input = [20, 18, 12, 8, 5, -2];
    const expected = [-2, 5, 8, 12, 18, 20];

    expect(insertionSort(input)).toEqual(expected);
  });

  test('sorts an array with duplicate values', () => {
    const input = [5, 12, 7, 5, 5, 7];
    const expected = [5, 5, 5, 7, 7, 12];

    expect(insertionSort(input)).toEqual(expected);
  });

  test('sorts a nearly-sorted array', () => {
    const input = [2, 3, 5, 7, 13, 11];
    const expected = [2, 3, 5, 7, 11, 13];

    expect(insertionSort(input)).toEqual(expected);
  });

  test('handles an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('handles an array with one element', () => {
    expect(insertionSort([5])).toEqual([5]);
  });

  test('handles an already sorted array', () => {
    expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('handles negative numbers', () => {
    expect(insertionSort([-3, -10, 0, 5, -1]))
      .toEqual([-10, -3, -1, 0, 5]);
  });

  test('handles all identical numbers', () => {
    expect(insertionSort([7, 7, 7, 7]))
      .toEqual([7, 7, 7, 7]);
  });

  test('sorts the original array in place', () => {
    const input = [3, 1, 2];
    const result = insertionSort(input);

    expect(input).toEqual([1, 2, 3]);
    expect(result).toBe(input);
  });
});
