# 1920. Build Array from Permutation

## Problem

Given an integer array `nums`, create a new array `ans` using:

`ans[i] = nums[nums[i]]`

### Example

Input:

```text
nums = [0,2,1,5,3,4]
```

Output:

```text
[0,1,2,4,5,3]
```

---

## My Solution

- Created a new array called `ans`.
- Used a `for` loop to go through `nums`.
- Used `nums[i]` to find a value.
- Used that value again as an index with `nums[nums[i]]`.
- Added the final value to `ans` using `push()`.
- Returned the completed array.

```js
const buildArray = function (nums) {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};
```

---

## What I Learned

- How to use a `for` loop to go through an array.
- The difference between an index and a value.
- How to use `nums[nums[i]]` to find another value.
- How `push()` adds a value to an array.
- Why `return ans` is needed.

---

## Mistakes / Bugs

- I tried to declare `nums` again inside the function, but `nums` was already a parameter.
- I forgot to return `ans`.
- I learned that `ans` should be created inside the function.

---

## Data Flow

```text
nums = [0,2,1,5,3,4]

i = 3
↓
nums[3] = 5
↓
nums[5] = 4
↓
ans.push(4)
↓
ans[3] = 4
```

The loop repeats until all values are added to `ans`.

---

## What to Remember

- `i` is the current index.
- `nums[i]` gets a value from the array.
- `nums[nums[i]]` uses that value as another index.
- `ans.push()` adds the final value.
- `return ans` returns the new array.
