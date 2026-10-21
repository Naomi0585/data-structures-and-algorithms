'use strict';

const AnimalShelter = require('./animal-shelter');

const shelter = new AnimalShelter();

shelter.enqueue({ species: 'dog', name: 'Max' });
shelter.enqueue({ species: 'cat', name: 'Luna' });
shelter.enqueue({ species: 'dog', name: 'Rocky' });
shelter.enqueue({ species: 'cat', name: 'Milo' });

console.log('First dog:', shelter.dequeue('dog'));
console.log('First cat:', shelter.dequeue('cat'));
console.log('Second dog:', shelter.dequeue('dog'));
console.log('Invalid preference:', shelter.dequeue('bird'));
