'use strict';

const AnimalShelter = require('./animal-shelter');

describe('AnimalShelter', () => {

  test('Can create an empty shelter', () => {
    const shelter = new AnimalShelter();

    expect(shelter.dogs).toEqual([]);
    expect(shelter.cats).toEqual([]);
  });

  test('Can enqueue a dog', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'dog', name: 'Max' });

    expect(shelter.dogs.length).toBe(1);
  });

  test('Can enqueue a cat', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'cat', name: 'Luna' });

    expect(shelter.cats.length).toBe(1);
  });

  test('Can dequeue the oldest dog', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'dog', name: 'Max' });
    shelter.enqueue({ species: 'dog', name: 'Rocky' });

    expect(shelter.dequeue('dog')).toEqual({
      species: 'dog',
      name: 'Max',
    });
  });

  test('Can dequeue the oldest cat', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'cat', name: 'Luna' });
    shelter.enqueue({ species: 'cat', name: 'Milo' });

    expect(shelter.dequeue('cat')).toEqual({
      species: 'cat',
      name: 'Luna',
    });
  });

  test('Returns null for invalid preference', () => {
    const shelter = new AnimalShelter();

    expect(shelter.dequeue('bird')).toBeNull();
  });

  test('Returns null when no animals match preference', () => {
    const shelter = new AnimalShelter();

    expect(shelter.dequeue('dog')).toBeNull();
  });

  test('Rejects an invalid animal', () => {
    const shelter = new AnimalShelter();

    expect(() => {
      shelter.enqueue({ species: 'bird', name: 'Tweety' });
    }).toThrow();
  });

  test('Maintains FIFO order for both species', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'dog', name: 'Max' });
    shelter.enqueue({ species: 'cat', name: 'Luna' });
    shelter.enqueue({ species: 'dog', name: 'Rocky' });
    shelter.enqueue({ species: 'cat', name: 'Milo' });

    expect(shelter.dequeue('cat').name).toBe('Luna');
    expect(shelter.dequeue('dog').name).toBe('Max');
    expect(shelter.dequeue('cat').name).toBe('Milo');
    expect(shelter.dequeue('dog').name).toBe('Rocky');
  });

});
