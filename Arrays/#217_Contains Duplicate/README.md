# 217. Contains Duplicate

## Problem

Given an array of numbers, check if there are any duplicate numbers.

Return `true` if there is a duplicate.

Return `false` if there are no duplicates.

Example:

**Input:**

```js
numbers = [1, 2, 3, 1];
```

**Output:**

```js
true;
```

The number `1` appears twice.

---

## My Solution

- Created an empty Set called `seen`.
- Used a `for` loop to check each number.
- Used `numbers[i]` to get the current number.
- Used `.has()` to check if the number is already in `seen`.
- If the number is already there, return `true`.
- If not, use `.add()` to save the number.
- Return `false` after the loop if there are no duplicates.

```js
function containsDuplicate(numbers) {
  const seen = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return true;
    }

    seen.add(numbers[i]);
  }

  return false;
}
```

---

## What I Learned

- `new Set()` creates an empty Set.
- A Set only keeps unique values.
- `seen` is just a variable name.
- `.has()` checks if a value is already in the Set.
- `.add()` adds a value to the Set.
- `.has()` returns `true` or `false`.
- `if` checks a condition.
- `return true` means I found a duplicate.
- `return false` means I checked all numbers and found no duplicates.
- I need to use `.has()` before `.add()`. Otherwise, the number will already be in the Set when I check it.
- I can use a Set instead of a nested loop to find duplicates.

---

## Data Flow

**Input:**

```js
numbers = [1, 2, 3, 1];
```

```text
seen = {}

i = 0
numbers[i] = 1
seen.has(1) → false
seen.add(1)
seen = {1}

i = 1
numbers[i] = 2
seen.has(2) → false
seen.add(2)
seen = {1, 2}

i = 2
numbers[i] = 3
seen
```
