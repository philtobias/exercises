'use strict';

function Dog() {
  this.setNumLegs(4);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function speak() {
  return 'bark';
};