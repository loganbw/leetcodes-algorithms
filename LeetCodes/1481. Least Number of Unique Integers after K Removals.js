/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const sortArr = arr.sort((a, b) => {
    return b - a;
  });
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1] && k != 0) {
      sortArr.splice(i, 1);
      k--;
    }
  }
  const total = new Set(sortArr);
  return total.size;
};
