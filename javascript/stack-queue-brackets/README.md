# Multi-Bracket Validation

## Summary

Create a function called `validateBrackets` that checks whether brackets in a given string are balanced.

## Description

The function accepts a string and returns a boolean value.

- `true` if all brackets are correctly matched.
- `false` if brackets are mismatched or unbalanced.

The function supports three types of brackets:

- Round brackets: `()`
- Square brackets: `[]`
- Curly brackets: `{}`

## Whiteboard Process

![Multi-Bracket Validation Whiteboard](/stack-queue-brackets/whiteboard.png)

## Approach & Efficiency

I used a stack to keep track of opening brackets.

The function loops through the string and adds opening brackets to the stack. When it finds a closing bracket, it removes the last opening bracket and checks whether they match.

If the brackets do not match, the function returns `false`. If the stack is empty after checking the entire string, it returns `true`.

**Time Complexity:** O(n) because the function checks each character once.

**Space Complexity:** O(n) because the stack may store multiple opening brackets.

## Solution

The solution uses JavaScript and the stack data structure.

[View JavaScript Solution](./stack-queue-brackets.js)

[View Unit Tests](./stack-queue-brackets.test.js)

## Testing

Tests cover:

- Correctly balanced brackets
- Incorrectly matched brackets
- Missing closing brackets
- Incorrect nesting
- Empty strings
- Strings containing regular text

## Conclusion

This challenge helped me understand how stacks can be used to validate matching brackets and how the Last In, First Out principle works in JavaScript.
