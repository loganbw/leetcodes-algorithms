/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let peak = Math.max(...arr);
  let peakIndx = arr.indexOf(peak);
  let peaked = false;
  if (arr[peakIndx] === arr[0] || arr[peakIndx] === arr.at(-1)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (peaked == true && arr[i] < arr[i + 1]) {
      return false;
    }
    if (arr[i] > arr[i + 1]) {
      peaked = true;
    }
    if (arr[i] == arr.at(-1)) {
      return true;
    }
  }
};
//big O O(n)