/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  return [...s1.split(" "), ...s2.split(" ")].filter(
    (e, idx, arr) => arr.indexOf(e) === arr.lastIndexOf(e)
  );
};
