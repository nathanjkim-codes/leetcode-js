const nums = [1, 2, 3, 4];

const runningSum = function (nums) {
  const result = [];

  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result.push(currentSum);
  }
  return result;
};
