# 1480. Running Sum of 1d Array

## Problem

Given an integer array `nums`, return the running sum of the array.

### Example

**Input**

```text
nums = [1,2,3,4]
```

**Output**

```text
[1,3,6,10]
```

---

## My Solution

- Created a new array called `result`.
- Created a variable called `currentSum` to keep track of the running total.
- Iterated through the array using a `for` loop.
- Added the current value to `currentSum`.
- Stored the updated `currentSum` in `result`.
- Returned the final `result` array.

---

## What I Learned

- How to solve a problem by breaking it down into small steps before writing code.
- How to keep track of a running total using a variable.
- The difference between the current value (`nums[i]`) and the accumulated value (`currentSum`).
- How `+=` works (`currentSum += nums[i]` is the same as `currentSum = currentSum + nums[i]`).
- How to use `push()` to store calculated values in a new array.
- Why `return` should be placed after the `for` loop so the function returns the complete result.
- Why variables that are only used inside a function should be declared inside the function.

---

## Mistakes

- I initially tried to add `nums[i] + nums[i]` instead of adding the current value to the running total.
- I placed `return` inside the `for` loop, which caused the function to stop after the first iteration.
- I declared `result` and `currentSum` outside the function before realizing they should be local variables inside the function.
- I learned that every iteration should first update `currentSum`, then store it in `result`.
