# Reverse an Array Challenge

Write a function called `reverseArray` which takes an array as an
argument. Without using built-in methods, return an array with the
elements in reversed order.

 # Whiteboard Process

 ![Array Reverse Whiteboard](arwhiteboard.png)

 1. Create a new empty array called `reversed`.
2. Start at the last element of the original array.
3. Move backward through the original array one element at a time.
4. Place each element into the next available position in the new array.
5. Return the new reversed array.

FUNCTION reverseArray(array)

    CREATE empty array called reversed

    FOR i starting at array.length - 1
        CONTINUE while i >= 0
        DECREASE i by 1

        SET reversed[reversed.length] equal to array[i]

    RETURN reversed
# Inputs and Outputs

In:
[1, 2, 3, 4, 5, 6]

Out:
[6, 5, 4, 3, 2, 1]


## Approach & Efficiency

I created an empty array and used a for loop to move through the
original array starting from the last element.

Each element is added to the new array in reverse order.

## Solution Code

```javascript
function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[reversed.length] = arr[i];
  }

  return reversed;
}

# Big O

### Time Complexity: O(n)

The function loops through the array one time. As the array becomes larger, the amount of work increases at the same rate.

### Space Complexity: O(n)

A second array is created to hold the reversed values. The amount of additional memory increases based on the size of the original array.
