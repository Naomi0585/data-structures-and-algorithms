# Array Binary Search

## Summary

Write a function called `BinarySearch` that searches for a value inside a sorted array using the binary search algorithm.

## Description

The `BinarySearch` function takes two parameters: a sorted array and a search key.

The function searches the array for the search key. If the value is found, the function returns the index where the value is located. If the value is not found, the function returns `-1`.

The solution must use binary search and should not use built-in JavaScript methods to find the value.

## Whiteboard Process

![Array Binary Search Whiteboard](./abswhiteboardpng)

## Approach & Efficiency

### Approach

I used the binary search algorithm. I start with a low index at the beginning of the array and a high index at the end of the array.

I calculate the middle index and compare the value at that index to the search key. If the values match, I return the middle index.

If the search key is greater than the middle value, I continue searching the right half of the array. If the search key is smaller, I continue searching the left half.

This process continues until the value is found or there are no more elements left to search.

### Efficiency

- Time: **O(log n)**
- Space: **O(1)**

Binary search has a time complexity of O(log n) because each comparison removes approximately half of the remaining values from the search.

The iterative solution has a space complexity of O(1) because it only uses a few variables regardless of the size of the array.

## Solution

The solution uses `low`, `high`, and `middle` indexes to repeatedly divide the searchable portion of the array in half.

If the search key is found, its index is returned. If the search finishes without finding the key, the function returns `-1`.

## Pseudocode for whiteboard:

FUNCTION BinarySearch(array, key)

    SET low = 0
    SET high = array length - 1

    WHILE low <= high

        SET middle = FLOOR((low + high) / 2)

        IF array[middle] equals key
            RETURN middle

        ELSE IF array[middle] < key
            SET low = middle + 1

        ELSE
            SET high = middle - 1

    END WHILE

    RETURN -1

END FUNCTION


