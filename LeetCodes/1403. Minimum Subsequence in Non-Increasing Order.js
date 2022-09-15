/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let highNum = nums.pop(nums.length - 1);
  let arr = [highNum];
  let sumNums = nums.reduce((partialSum, a) => partialSum + a, 0);
  let sumArr = arr.reduce((partialSum, a) => partialSum + a, 0);
  while (sumArr < sumNums + 1) {
    let t = nums.pop(nums.length - 1);
    arr.push(t);
    sumNums = nums.reduce((partialSum, a) => partialSum + a, 0);
    sumArr = arr.reduce((partialSum, a) => partialSum + a, 0);
  }

  return arr;
};
