'use strict';

describe('Dog Class', function() {
  describe('constructor', function() {
    it('inherits from Animal class', function() {
      var instance = new Dog();
      expect(instance).toEqual(jasmine.any(Animal));
      expect(instance instanceof Dog).toBe(true);
    });

    it('has 4 legs', function() {
      var instance = new Dog();
      expect(instance.getNumLegs()).toBe(4);
    });
  });

  describe('speak()', function() {
    it('returns bark', function() {
      var instance = new Dog();
      expect(instance.speak()).toBe('bark');
    });
  });

  describe('getNumLegs()', function() {
    it('returns value set to numLegs property', function() {
      var instance = new Dog();
      expect(instance.getNumLegs()).toBe(4);
    });
  });
});