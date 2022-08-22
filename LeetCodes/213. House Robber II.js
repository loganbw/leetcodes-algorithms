/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) {
    return Math.max(...nums);
  }

  return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
  //helper function (same as solution for Robber I problem
  function helper(nums) {
    let oneBefore = 0;
    let lastOne = 0;
    for (let i in nums) {
      let temp = Math.max(nums[i] + oneBefore, lastOne);
      oneBefore = lastOne;
      lastOne = temp;
    }
    return lastOne;
  }
};
