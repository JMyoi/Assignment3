function twoSum(nums, target) {
    const len = nums.length;
    
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    
    return []; // Return an empty array if not found
  }
  module.exports = twoSum;