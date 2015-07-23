'use strict';

function Cat() {
  this.setNumLegs(4);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.speak = function speak() {
  return 'meow';
};