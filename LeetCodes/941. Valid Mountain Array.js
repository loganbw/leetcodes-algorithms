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
    if (arr[i] < arr[i + 1]) {
      console.log("climbing");
    }
    if (peaked == true && arr[i] < arr[i + 1]) {
      return false;
    }
    if (arr[i] > arr[i + 1]) {
      console.log("descending");
      peaked = true;
    }
    if (arr[i] == arr.at(-1)) {
      return true;
    }
  }
};
