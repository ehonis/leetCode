/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const string = s.replace(/[^a-zA-Z0-9]/g, '');
  const cleanedString = string.toLowerCase();

  for (i = 0; i < cleanedString.length; i++) {
    const front = i;
    const back = cleanedString.length - (i + 1);

    if (cleanedString[front] === cleanedString[back]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPavalidlindrome('A man, a plan, a canal: Panama'));
