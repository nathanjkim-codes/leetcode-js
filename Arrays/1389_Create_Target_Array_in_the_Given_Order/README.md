# 1389. Create Target Array in the Given Order

## Problem

Given two arrays, `nums` and `index`, create a `target` array by inserting each `nums[i]` at the position `index[i]`.

### Example

**Input**

```text
nums = [0,1,2,3,4]
index = [0,1,2,2,1]
```

**Output**

```text
[0,4,1,3,2]
```

Example:

```text
i = 0
nums[0] = 0
index[0] = 0
target = [0]

i = 1
nums[1] = 1
index[1] = 1
target = [0,1]

i = 2
nums[2] = 2
index[2] = 2
target = [0,1,2]

i = 3
nums[3] = 3
index[3] = 2
target = [0,1,3,2]

i = 4
nums[4] = 4
index[4] = 1
target = [0,4,1,3,2]
```

---

## My Pseudocode

1. Create an empty `target` array.
2. Iterate through `nums`.
3. Get the position from `index[i]`.
4. Get the value from `nums[i]`.
5. Insert the value into `target` at that position.
6. Repeat for every number.
7. Return `target`.

---

## My Solution

```js
const createTargetArray = function (nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};
```

---

## What I Learned

- `nums[i]` tells me **what value to insert**.

```js
nums[i];
```

- `index[i]` tells me **where to insert it**.

```js
index[i];
```

- `splice()` can insert a value at a specific position.

```js
array.splice(startIndex, deleteCount, valueToAdd);
```

For this problem:

```js
target.splice(index[i], 0, nums[i]);
```

means:

```text
index[i] → WHERE to insert
0        → delete NOTHING
nums[i]  → WHAT to insert
```

- `push()` and `splice()` are different:

```text
push()
→ add to the END

splice()
→ insert/remove at a SPECIFIC INDEX
```

- I can use `const` for an array even when I use `splice()`.

```js
const target = [];
target.splice(...); // ✅
```

The array contents change, but `target` is not reassigned to a different array.

- `i` uses `let` because its value changes:

```text
i = 0
↓
i = 1
↓
i = 2
...
```

---

## Mistakes / Things I Needed to Understand

- I learned that I need a loop because I have to perform the insertion for every `nums[i]`.
- I learned that putting `target` inside the function gives each function call a fresh empty array.

---

## Data Flow

```text
nums + index
↓
i = current position
↓
nums[i]
= WWhat value should I insert?
↓
index[i]
= Where should I insert it?
↓
target.splice(index[i], 0, nums[i])
↓
target changes
↓
i++
↓
repeat
↓
return target
```
