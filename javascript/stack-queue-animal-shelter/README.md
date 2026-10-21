# Code Challenge: Animal Shelter

## Summary

Create an AnimalShelter class that manages cats and dogs using the First In, First Out (FIFO) principle.

## Description

The AnimalShelter class allows users to add dogs and cats and adopt the animal that has been waiting the longest based on their preferred species.

The class has two methods:

- `enqueue(animal)`: Adds a valid cat or dog to the shelter.
- `dequeue(pref)`: Removes and returns the oldest animal matching the preference. Returns `null` for an invalid preference or if no matching animals are available.

## Approach & Efficiency

I used two arrays to store dogs and cats separately. When an animal is added, it is placed at the end of its species array. When an animal is adopted, the first animal in the corresponding array is removed.

This maintains FIFO order for each species.

### Big O

- Enqueue: O(1) time
- Dequeue: O(n) time because removing the first array element requires shifting the remaining elements
- Space: O(n) to store the animals

## Whiteboard Process

![Animal Shelter Whiteboard](./animal-shelter-whiteboard.png)

## Solution

[View implementation](./animal-shelter.js)

## Testing

I wrote tests for:

- Creating an empty shelter
- Adding cats and dogs
- Removing the oldest matching animal
- Maintaining FIFO order
- Handling invalid preferences
- Handling an empty shelter
- Rejecting invalid animals

[View tests](./animal-shelter.test.js)
