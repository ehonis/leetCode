/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCounts = new Map();
  const tCounts = new Map();

  for (const char of s) {
    sCounts.set(char, (sCounts.get(char) || 0) + 1);
  }
  for (const char of t) {
    tCounts.set(char, (tCounts.get(char) || 0) + 1);
  }

  for (const [key, value] of tCounts.entries()) {
    if (sCounts.get(key) !== value) {
      return false;
    }
  }

  return true;
};

isAnagram('anagram', 'naagram');
