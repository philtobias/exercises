'use strict';

describe('Stack()', function() {
  describe('push()', function() {
    it('adds items to the top of the Stack', function() {
      var stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.list).toEqual([1, 2]);

      stack.push(3);
      expect(stack.list).toEqual([1, 2, 3]);
    });
  });

  describe('pop()', function() {
    it('removes the top item from the Stack', function() {
      var stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toBe(2);
      expect(stack.list.length).toBe(1);

      expect(stack.pop()).toBe(1);
      expect(stack.list.length).toBe(0);
    });

    it('returns undefined if there are no items on the Stack', function() {
      var stack = new Stack();
      expect(stack.pop()).toBe(undefined);
      expect(stack.list.length).toBe(0);
    });
  });

  describe('length()', function() {
    it('returns the number of items in the Stack', function() {
      var stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.length()).toBe(2);

      stack.push(3);
      expect(stack.length()).toBe(3);
      stack.pop();
      expect(stack.length()).toBe(2);
    });

    it('returns 0 if there are no items in the Stack', function() {
      var stack = new Stack();
      expect(stack.length()).toBe(0);
    });
  });

  describe('top()', function() {
    it('returns the top item on the Stack without removing it', function() {
      var stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');

      expect(stack.top()).toBe('c');
      expect(stack.length()).toBe(3);

      stack.push('d');
      expect(stack.top()).toBe('d');
      expect(stack.length()).toBe(4);
    });

    it('returns null if the Stack is empty', function() {
      var stack = new Stack();
      expect(stack.top()).toBe(null);
    });
  });

  describe('toString()', function() {
    it('returns an empty string for a Stack with no items on it', function() {
      var stack = new Stack();
      expect(stack.toString()).toBe('');
    });

    it('returns a comma delimited string of the items on the Stack from top to bottom', function() {
      var stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.toString()).toBe('3,2,1');

      stack.push(4);
      expect(stack.toString()).toBe('4,3,2,1');
    });
  });
});