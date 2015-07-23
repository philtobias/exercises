'use strict';

describe('Animal Class', function() {
  describe('speak()', function() {
    it('throws error to override speak()', function() {
      var instance = new Animal();
      expect(instance.speak).toThrow(new Error('Must override speak() method'));
    });
  });

  describe('setNumLegs()', function() {
    it('set value to numLegs property', function() {
      var instance = new Animal();
      instance.setNumLegs(2);
      expect(instance.numLegs).toBe(2);

      instance = new Animal();
      instance.setNumLegs(10);
      expect(instance.numLegs).toBe(10);
    });
  });

  describe('getNumLegs()', function() {
    it('returns value set to numLegs property', function() {
      var instance = new Animal();
      instance.numLegs = 3;
      expect(instance.getNumLegs()).toBe(3);

      instance.numLegs = 11;
      expect(instance.getNumLegs()).toBe(11);
    });
  });
});