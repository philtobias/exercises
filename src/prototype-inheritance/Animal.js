'use strict';

function Animal() {}

Animal.prototype.speak = function speak() {
  throw new Error('Must override speak() method');
};

Animal.prototype.setNumLegs = function setNumLegs(value) {
  this.numLegs = value;
};

Animal.prototype.getNumLegs = function getNumLegs() {
  return this.numLegs;
};