const nums = [0, 2, 1, 5, 3, 4];

const buildArray = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};
console.log(buildArray(nums));
