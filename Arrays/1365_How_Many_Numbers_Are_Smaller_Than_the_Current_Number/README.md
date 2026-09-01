# 1365. How Many Numbers Are Smaller Than the Current Number

## Problem

Given an array of numbers, find how many numbers are smaller than each current number.

### Example

**Input**

```text
nums = [8,1,2,2,3]
```

**Output**

```text
[4,0,1,1,3]
```

Example:

```text
Current number = 8

1 < 8 → count++
2 < 8 → count++
2 < 8 → count++
3 < 8 → count++

count = 4
```

---

## My Pseudocode

1. Create an empty result array.
2. Iterate through each number.
3. Set count to 0.
4. Compare the current number with every number.
5. If the other number is smaller, increase count.
6. Push count into result.
7. Return result.

## My Solution

- Created an empty array called `result`.
- Used `i` to select the current number.
- Reset `count` to `0` for each current number.
- Used `j` to loop through every number in the array.
- Compared `nums[j]` with `nums[i]`.
- Increased `count` when `nums[j]` was smaller.
- Pushed the final `count` into `result`.
- Returned `result` after checking every number.

```js
function smallerNumbersThanCurrent(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
}
```

---

## What I Learned

- `i` represents the current number.

```js
nums[i];
```

- `j` loops through every number to compare with the current number.

```js
nums[j];
```

- For this problem, `j` starts at `0` because I need to check the entire array, including numbers before `i`.

```js
for (let j = 0; j < nums.length; j++)
```

- Comparing the current number with itself is okay because:

```text
2 < 2 → false
```

So `count` does not increase.

- The comparison needs to be:

```js
nums[j] < nums[i];
```

This asks:

```text
Is the number I'm checking
smaller than the current number?
```

- `count` must reset for every new `i`.

```text
new current number
↓
count = 0
↓
check every number
↓
push count
```

---

## Mistakes

- At first, I wasn't sure whether `j` should start at `0` or `i + 1`.
- I learned that `j = i + 1` only works when I only need to check values after `i`.
- I accidentally used `i++` inside the `j` loop instead of `j++`.
- I reversed the comparison and used `>` instead of `<`.
- I initially used a number for `result` even though I needed an array.
- I learned that `result.push(count)` should happen after the `j` loop finishes.

---

## Data Flow

```text
nums
↓
i selects current number
↓
count = 0
↓
j checks every number
↓
nums[j] < nums[i] ?
↓
Yes → count++
↓
Finish j loop
↓
result.push(count)
↓
Move to next i
↓
Repeat
↓
return result
```
