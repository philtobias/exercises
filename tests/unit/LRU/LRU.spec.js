'use strict';

describe('LRU', function() {
  var lru;

  beforeEach(function() {
    lru = new LRU(5);
  });

  it('sets the limit', function() {
    expect(lru.limit).toBe(5);
  });

  describe('push()', function() {
    it('adds a node to the list', function() {
      lru.push(1, 1);
    
      expect(lru.map[1].key).toBe(1);
      expect(lru.count).toBe(1);

      lru.push(2, 2);
      lru.push(3, 3);
      lru.push(4, 4);

      expect(lru.map[3].key).toBe(3);
      expect(lru.count).toBe(4);
    });

    it('calls shift() when count of nodes exceeds the limit', function() {
      spyOn(lru, 'shift');

      lru.push(1, 1);
      lru.push(2, 2);
      lru.push(3, 3);
      lru.push(4, 4);
      lru.push(5, 5);
      lru.push(6, 6);

      expect(lru.shift).toHaveBeenCalled();
    });
  });

  describe('shift()', function() {
    it('removes the least recently used node', function() {
      lru.push(1, 1);
      lru.push(2, 2);
      lru.push(3, 3);
      lru.push(4, 4);
      lru.push(5, 5);
      lru.push(6, 6);

      expect(lru.map[1]).toBe(undefined);
      expect(lru.count).toBe(5);
    });
  });

  describe('get()', function() {
    beforeEach(function() {
      lru.push(1, 1);
      lru.push(2, 2);
      lru.push(3, 3);
      lru.push(4, 4);
      lru.push(5, 5);
    });

    it('sets the new tail', function() {
      var node = lru.get(3);
      expect(node).toEqual(jasmine.any(Object));
      expect(node.older).toEqual(jasmine.any(Object));
      expect(node.newer).toBe(undefined);
      expect(lru.tail.key).toBe(3);
    });
  });

  describe('toString()', function() {
    beforeEach(function() {
      lru.push(1, 1);
      lru.push(2, 2);
      lru.push(3, 3);
      lru.push(4, 4);
      lru.push(5, 5);
    });

    it('returns the list as a string', function() {
      expect(lru.toString()).toBe('1,2,3,4,5');

      lru.push(6, 6);
      expect(lru.toString()).toBe('2,3,4,5,6');
    });
  });
});