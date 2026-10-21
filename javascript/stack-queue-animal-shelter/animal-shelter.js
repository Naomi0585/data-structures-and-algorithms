'use strict';

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (
      !animal ||
      typeof animal.name !== 'string' ||
      (animal.species !== 'dog' && animal.species !== 'cat')
    ) {
      throw new Error('Animal must be a dog or cat with a name');
    }

    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else {
      this.cats.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogs.shift() || null;
    }

    if (pref === 'cat') {
      return this.cats.shift() || null;
    }

    return null;
  }
}

module.exports = AnimalShelter;
