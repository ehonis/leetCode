/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (char === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (char === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(isValid('[[[]'));
