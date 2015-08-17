'use strict';

describe('LinkedListStack()', function() {
  describe('push()', function() {
    it('adds items to the top of the LinkedListStack', function() {
      var stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);

      expect(stack.toString()).toEqual('2,1');

      stack.push(3);
      expect(stack.toString()).toEqual('3,2,1');
    });
  });

  describe('pop()', function() {
    it('removes the top item from the LinkedListStack', function() {
      var stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);

      expect(stack.pop().val).toBe(2);
      expect(stack.length()).toBe(1);

      expect(stack.pop().val).toBe(1);
      expect(stack.length()).toBe(0);
    });

    it('returns undefined if there are no items on the LinkedListStack', function() {
      var stack = new LinkedListStack();
      expect(stack.pop()).toBe(undefined);
      expect(stack.length()).toBe(0);
    });
  });

  describe('length()', function() {
    it('returns the number of items in the LinkedListStack', function() {
      var stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);

      expect(stack.length()).toBe(2);

      stack.push(3);
      expect(stack.length()).toBe(3);
      stack.pop();
      expect(stack.length()).toBe(2);
    });

    it('returns 0 if there are no items in the LinkedListStack', function() {
      var stack = new LinkedListStack();
      expect(stack.length()).toBe(0);
    });
  });

  describe('top()', function() {
    it('returns the top item on the LinkedListStack without removing it', function() {
      var stack = new LinkedListStack();
      stack.push('a');
      stack.push('b');
      stack.push('c');

      expect(stack.top().val).toBe('c');
      expect(stack.length()).toBe(3);

      stack.push('d');
      expect(stack.top().val).toBe('d');
      expect(stack.length()).toBe(4);
    });

    it('returns null if the LinkedListStack is empty', function() {
      var stack = new LinkedListStack();
      expect(stack.top()).toBe(null);
    });
  });

  describe('toString()', function() {
    it('returns an empty string for a LinkedListStack with no items on it', function() {
      var stack = new LinkedListStack();
      expect(stack.toString()).toBe('');
    });

    it('returns a comma delimited string of the items on the LinkedListStack from top to bottom', function() {
      var stack = new LinkedListStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.toString()).toBe('3,2,1');

      stack.push(4);
      expect(stack.toString()).toBe('4,3,2,1');
    });
  });
});