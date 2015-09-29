'use strict';

describe('linkedListHasLoop()', function() {

  it('detects a loop in a circular Linked List', function() {
    var nodeA = {val: 'A'}, 
        nodeB = {val: 'B'}, 
        nodeC = {val: 'C'}, 
        nodeD = {val: 'D'};

    nodeA.next = nodeB;
    nodeB.next = nodeC;
    nodeC.next = nodeD;
    nodeD.next = nodeB;
    
    expect(linkedListHasLoop(nodeA)).toBe(true);
  });

  it('detects no loop in a Linked List', function() {
    var nodeA = {val: 'A'},
        nodeB = {val: 'B'},
        nodeC = {val: 'C'};

    nodeA.next = nodeB;
    nodeB.next = nodeC;
    nodeC.next = null;
    
    expect(linkedListHasLoop(nodeA)).toBe(false);
  });

  it('detects no loop if the root node is null', function() {
    expect(linkedListHasLoop(null)).toBe(false);
  });
});