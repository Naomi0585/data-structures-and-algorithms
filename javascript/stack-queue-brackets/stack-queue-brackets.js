'use strict';

function validateBrackets(string) {
  const stack = [];

  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of string) {

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }

    else if (char === ')' || char === ']' || char === '}') {

      if (stack.length === 0) {
        return false;
      }

      const lastBracket = stack.pop();

      if (lastBracket !== brackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validateBrackets;
