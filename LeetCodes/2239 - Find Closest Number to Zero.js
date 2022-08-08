const nums = [-4,-1,1,2,7,10]
var findClosestNumber = function(nums) {
    let closest = 0;
    for(let i = 0; i < nums.length; i++){
            if (closest === 0) {
            closest = nums[i];
        } else if (nums[i] > 0 && nums[i] <= Math.abs(closest)) {
            closest = nums[i];
        } else if (nums[i] < 0 && - nums[i] < Math.abs(closest)) {
            closest = nums[i];
        }
    }
    return closest;
};