# 1470. Shuffle the Array

## Problem

Given an array with two groups of numbers, create a new array by putting one value from the first group and one value from the second group together.

### Example

**Input**

```text
nums = [2,5,1,3,4,7]
n = 3
```

**Output**

```text
[2,3,5,4,1,7]
```

---

## My Solution

- Created an empty array called `result`.
- Used a `for` loop that runs while `i < n`.
- Used `nums[i]` to get a value from the first group.
- Used `nums[i + n]` to get the matching value from the second group.
- Added both values to `result`.
- Returned `result`.

---

## What I Learned

- `n` is the number of pairs I need to process.
- A `for` loop does not always need to use `nums.length`.
- One loop iteration can add more than one value.
- `nums[i]` gets a value from the first group.
- `nums[i + n]` gets the matching value from the second group.
- The loop stops when `i < n` becomes false.

---

## Mistakes

- At first, I thought I needed two `for` loops.
- I did not understand why the loop uses `i < n`.
- I used `i + 3` before understanding that I should use `i + n`.
- I needed help finding the `i + n` pattern.
