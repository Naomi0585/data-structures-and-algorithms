# Insertion Sort — Code Challenge

## Introduction

Insertion Sort is a sorting algorithm that organizes an array one element at a time. It works similarly to organizing playing cards in your hand. You take one card, compare it with the cards already organized, and insert it into the correct position.

The algorithm starts with the second element because the first element is already considered sorted. It continues comparing and moving elements until the entire array is in ascending order.

## How Insertion Sort Works

1. Start with the second element of the array.
2. Save that element as the `key`.
3. Compare the key with the elements to its left.
4. Shift larger elements one position to the right.
5. Insert the key into its correct position.
6. Repeat until the array is sorted.

## Sample Array 1: [8, 4, 23, 42, 16, 15]

| Pass | Key | Array after insertion |
|---|---|---|
| Initial | — | `[8, 4, 23, 42, 16, 15]` |
| 1 | 4 | `[4, 8, 23, 42, 16, 15]` |
| 2 | 23 | `[4, 8, 23, 42, 16, 15]` |
| 3 | 42 | `[4, 8, 23, 42, 16, 15]` |
| 4 | 16 | `[4, 8, 16, 23, 42, 15]` |
| 5 | 15 | `[4, 8, 15, 16, 23, 42]` |

**Explanation:**

During the first pass, 4 is smaller than 8, so it moves before 8. The next two numbers, 23 and 42, are already in the correct order. When the algorithm reaches 16, it shifts 42 and 23 to make room. Finally, 15 is inserted between 8 and 16.

**Final output:** `[4, 8, 15, 16, 23, 42]`

## Sample Array 2: Reverse-Sorted

Input: `[20, 18, 12, 8, 5, -2]`

| Pass | Key | Array after insertion |
|---|---|---|
| Initial | — | `[20, 18, 12, 8, 5, -2]` |
| 1 | 18 | `[18, 20, 12, 8, 5, -2]` |
| 2 | 12 | `[12, 18, 20, 8, 5, -2]` |
| 3 | 8 | `[8, 12, 18, 20, 5, -2]` |
| 4 | 5 | `[5, 8, 12, 18, 20, -2]` |
| 5 | -2 | `[-2, 5, 8, 12, 18, 20]` |

**Explanation:**

Since the numbers start in descending order, every new key must move all the way to the beginning of the sorted section. This requires many comparisons and shifts, making it a worst-case example for Insertion Sort.

**Final output:** `[-2, 5, 8, 12, 18, 20]`

## Sample Array 3: Few Unique Values

Input: `[5, 12, 7, 5, 5, 7]`

| Pass | Key | Array after insertion |
|---|---|---|
| Initial | — | `[5, 12, 7, 5, 5, 7]` |
| 1 | 12 | `[5, 12, 7, 5, 5, 7]` |
| 2 | 7 | `[5, 7, 12, 5, 5, 7]` |
| 3 | 5 | `[5, 5, 7, 12, 5, 7]` |
| 4 | 5 | `[5, 5, 5, 7, 12, 7]` |
| 5 | 7 | `[5, 5, 5, 7, 7, 12]` |

**Explanation:**

This array contains repeated numbers. Insertion Sort compares the numbers and moves only those that are larger than the key. Equal numbers do not need to be shifted, so their original relative order is preserved.

**Final output:** `[5, 5, 5, 7, 7, 12]`

## Sample Array 4: Nearly-Sorted

Input: `[2, 3, 5, 7, 13, 11]`

| Pass | Key | Array after insertion |
|---|---|---|
| Initial | — | `[2, 3, 5, 7, 13, 11]` |
| 1 | 3 | `[2, 3, 5, 7, 13, 11]` |
| 2 | 5 | `[2, 3, 5, 7, 13, 11]` |
| 3 | 7 | `[2, 3, 5, 7, 13, 11]` |
| 4 | 13 | `[2, 3, 5, 7, 13, 11]` |
| 5 | 11 | `[2, 3, 5, 7, 11, 13]` |

**Explanation:**

Most of the numbers are already sorted, so the algorithm does not need to move them. Only the last number, 11, needs to be inserted before 13. This demonstrates why Insertion Sort performs well on nearly-sorted arrays.

**Final output:** `[2, 3, 5, 7, 11, 13]`

## Efficiency and Big O

**Time Complexity:**

- Best case: O(n) — The array is already sorted.
- Average case: O(n²) — Some numbers need to be moved.
- Worst case: O(n²) — The array is reverse-sorted.

**Space Complexity: O(1)**

Insertion Sort only needs a few additional variables, such as `key`, `i`, and `j`. It sorts the original array without creating another array.

## Conclusion

Insertion Sort is a straightforward sorting algorithm that is useful for understanding how comparisons and shifting work. Although it can be slow for large arrays, it performs well when the data is already mostly sorted.

This challenge helped me understand how an algorithm gradually builds a sorted array and how the original order of the input can affect performance.

## Testing

Tests are written using Jest.

Run:

npx jest insertion-sort/insertion-sort.test.js --runInBand

The tests cover:
- Sample array
- Reverse-sorted array
- Duplicate values
- Nearly-sorted array
- Empty array
- Single-element array
- Already sorted array
- Negative numbers
- Identical values
- In-place sorting
