'use strict';

describe('Cat Class', function() {
  describe('constructor', function() {
    it('inherits from Animal class', function() {
      var instance = new Cat();
      expect(instance).toEqual(jasmine.any(Animal));
      expect(instance instanceof Cat).toBe(true);
    });

    it('has 4 legs', function() {
      var instance = new Cat();
      expect(instance.getNumLegs()).toBe(4);
    });
  });

  describe('speak()', function() {
    it('returns meow', function() {
      var instance = new Cat();
      expect(instance.speak()).toBe('meow');
    });
  });

  describe('getNumLegs()', function() {
    it('returns value set to numLegs property', function() {
      var instance = new Cat();
      expect(instance.getNumLegs()).toBe(4);
    });
  });
});