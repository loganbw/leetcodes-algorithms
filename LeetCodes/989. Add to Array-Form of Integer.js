/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    const n = num.join("");
    const added = parseInt(n) + k
    return added.toString().split("").map(Number)
};