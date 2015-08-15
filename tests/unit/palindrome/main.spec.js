'use strict';

describe('isPalindrome()', function() {
  it('returns true for palindromes', function() {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
    expect(isPalindrome('1')).toBe(true);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('returns false for words that are not palindromes', function() {
    expect(isPalindrome('abbc')).toBe(false);
    expect(isPalindrome('abc, cb')).toBe(false);
    expect(isPalindrome('race a car')).toBe(false);
  });
});