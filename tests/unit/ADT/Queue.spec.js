'use strict';

describe('Queue()', function() {
  describe('enqueue()', function() {
    it('adds items to the top of the Queue', function() {
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.list).toEqual([1, 2]);

      queue.enqueue(3);
      expect(queue.list).toEqual([1, 2, 3]);
    });
  });

  describe('dequeue()', function() {
    it('removes the first item from the Queue', function() {
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.dequeue()).toBe(1);
      expect(queue.list.length).toBe(1);

      expect(queue.dequeue()).toBe(2);
      expect(queue.list.length).toBe(0);
    });

    it('returns undefined if there are no items in the Queue', function() {
      var queue = new Queue();
      expect(queue.dequeue()).toBe(undefined);
      expect(queue.list.length).toBe(0);
    });
  });

  describe('length()', function() {
    it('returns the number of items in the Queue', function() {
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.length()).toBe(2);

      queue.enqueue(3);
      expect(queue.length()).toBe(3);
      queue.dequeue();
      expect(queue.length()).toBe(2);
    });

    it('returns 0 if there are no items in the Queue', function() {
      var queue = new Queue();
      expect(queue.length()).toBe(0);
    });
  });

  describe('peek()', function() {
    it('returns the first item in the Queue without removing it', function() {
      var queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.peek()).toBe('a');
      expect(queue.length()).toBe(3);

      queue.enqueue('d');
      expect(queue.peek()).toBe('a');
      expect(queue.length()).toBe(4);
    });

    it('returns null if the Queue is empty', function() {
      var queue = new Queue();
      expect(queue.peek()).toBe(null);
    });
  });

  describe('toString()', function() {
    it('returns an empty string for a Queue with no items in it', function() {
      var queue = new Queue();
      expect(queue.toString()).toBe('');
    });

    it('returns a comma delimited string of the items on the Queue', function() {
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.toString()).toBe('1,2,3');

      queue.enqueue(4);
      expect(queue.toString()).toBe('1,2,3,4');
    });
  });
});