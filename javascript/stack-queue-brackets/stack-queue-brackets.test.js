'use strict';

const validateBrackets = require('./stack-queue-brackets');

describe('Multi-Bracket Validation', () => {

  test('returns true for balanced brackets', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}()[]')).toBe(true);
    expect(validateBrackets('{[()]}')).toBe(true);
  });

  test('returns false for mismatched brackets', () => {
    expect(validateBrackets('(]')).toBe(false);
    expect(validateBrackets('{(})')).toBe(false);
    expect(validateBrackets('[({}]')).toBe(false);
  });

  test('returns false for missing closing brackets', () => {
    expect(validateBrackets('(((')).toBe(false);
    expect(validateBrackets('{[')).toBe(false);
  });

  test('returns false for extra closing brackets', () => {
    expect(validateBrackets('())')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
  });

  test('handles strings containing text', () => {
    expect(validateBrackets('Hello (World)')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(validateBrackets('')).toBe(true);
  });

});
