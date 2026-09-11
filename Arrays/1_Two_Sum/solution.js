const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}
