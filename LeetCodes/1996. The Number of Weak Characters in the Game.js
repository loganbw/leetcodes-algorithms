/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let weak = 0;
  let max = 0;
  for (let i = properties.length - 1; i >= 0; --i) {
    max = Math.max(max, properties[i][1]);
    if (properties[i][1] < max) ++weak;
  }

  return weak;
};
