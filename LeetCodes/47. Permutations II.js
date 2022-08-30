/**
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (numsArr) {
  const map = numsArr.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 0;
    acc[curr]++;
    return acc;
  }, {});
  let numsTotal = numsArr.length;
  const nums = Object.keys(map);
  const result = [];

  function permutate(attempt, numsUsed = 0) {
    if (numsUsed === numsTotal) {
      result.push([...attempt]);
      return;
    }
    for (const num of nums) {
      if (!map[num]) continue;
      map[num]--;
      attempt.push(num);
      permutate(attempt, numsUsed + 1);
      attempt.pop();
      map[num]++;
    }
  }

  permutate([]);
  return result;
};
