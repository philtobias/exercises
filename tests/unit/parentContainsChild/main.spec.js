'use strict';

describe('parentContainsChild()', function() {
  var div;
  var parent;
  var child;

  beforeEach(function() {
    var html = [
      '<div class="a">',
      '  <div class="a-1"></div>',
      '  <div class="a-2"></div>',
      '  <div class="b">',
      '    <div class="b-1"></div>',
      '    <div class="b-2"></div>',
      '    <div class="b-3"></div>',
      '  </div>',
      '  <div class="c">',
      '    <div class="c-1"></div>',
      '    <div class="d">',
      '      <div class="d-1"></div>',
      '      <div class="d-2"></div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('');

    div = document.createElement('div');
    div.innerHTML = html;
  });

  function getElt(className) {
    return div.querySelector('.' + className);
  }

  it('returns true when the child element is a descendant of the parent element', function() {
    parent = getElt('a');
    child = getElt('b-2');
    expect(parentContainsChild(parent, child)).toBe(true);

    parent = getElt('b');
    child = getElt('b-2');
    expect(parentContainsChild(parent, child)).toBe(true);

    parent = getElt('a');
    child = getElt('a');
    expect(parentContainsChild(parent, child)).toBe(true);

    parent = getElt('d');
    child = getElt('d-2');
    expect(parentContainsChild(parent, child)).toBe(true);
  });

  it('returns false when child element is not a descendant of the parent element', function() {
    parent = getElt('b');
    child = getElt('c-1');
    expect(parentContainsChild(parent, child)).toBe(false);

    parent = getElt('c');
    child = getElt('a');
    expect(parentContainsChild(parent, child)).toBe(false);

    parent = getElt('c');
    child = getElt('b-3');
    expect(parentContainsChild(parent, child)).toBe(false);
  });
});