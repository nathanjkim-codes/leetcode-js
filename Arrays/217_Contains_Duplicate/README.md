# 217. Contains Duplicate

## Problem

Given an array of numbers, check if any number appears more than once.

Return `true` if there is a duplicate.

Return `false` if every number is different.

### Example

**Input**

```text
nums = [1,2,3,1]
```

**Output**

```text
true
```

Example:

```text
Current number = 1

1 === 2 → false
1 === 3 → false
1 === 1 → true

Duplicate found

return true
```

---

## My Pseudocode

1. Iterate through each number using `i`.
2. Use `j` to check the numbers after `i`.
3. Start `j` at `i + 1`.
4. Compare `nums[i]` with `nums[j]`.
5. If they are equal, return `true`.
6. If all comparisons finish without finding a duplicate, return `false`.

## My Solution

- Used `i` to select the current number.
- Used `j` to check the numbers after the current number.
- Started `j` at `i + 1`.
- Compared `nums[i]` with `nums[j]`.
- Returned `true` when two numbers were equal.
- Returned `false` after all loops finished if no duplicate was found.

```js
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}
```

---

## What I Learned

- `i` represents the current number.

```js
nums[i];
```

- `j` represents another number that I compare with the current number.

```js
nums[j];
```

- For this problem, `j` starts at `i + 1`.

```js
for (let j = i + 1; j < nums.length; j++)
```

This means I only check the numbers after the current number.

```text
i = 0
j = 1, 2, 3

i = 1
j = 2, 3

i = 2
j = 3
```

- The comparison is:

```js
nums[i] === nums[j];
```

This asks:

```text
Is the current number
the same as the number I'm checking?
```

- If the two numbers are equal:

```js
if (nums[i] === nums[j]) {
  return true;
}
```

I found a duplicate, so I don't need to continue checking.

- `return true` is inside the loop because I can stop as soon as I find one duplicate.

```text
duplicate found
↓
answer is true
↓
return true
↓
function stops
```

- `return false` is after both loops.

```js
return false;
```

If both loops completely finish, that means no duplicate was found.

```text
check everything
↓
no duplicate found
↓
return false
```

---

## Mistakes

- I learned that I only need to compare the current number with the numbers after it.
- I learned that `nums[i] === nums[j]` compares the values at two different indexes.
- I learned that `return true` can be inside the loop because I can stop immediately after finding a duplicate.

---

## Data Flow

```text
nums
↓
i selects current number
↓
j starts at i + 1
↓
compare nums[i] and nums[j]
↓
nums[i] === nums[j] ?
↓
Yes → return true
↓
No → move j forward
↓
check next number
↓
finish j loop
↓
move to next i
↓
repeat
↓
finish both loops
↓
return false
```

### Example Data Flow

```text
nums = [1,2,3,1]

i = 0
nums[i] = 1
↓
j = 1
nums[j] = 2
↓
1 === 2 → false

j = 2
nums[j] = 3
↓
1 === 3 → false

j = 3
nums[j] = 1
↓
1 === 1 → true
↓
return true
```

---

## What to Remember

When I need to compare one number with the numbers after it:

```text
i = current number
↓
j = i + 1
↓
compare
```

For duplicate checking:

```js
if (nums[i] === nums[j]) {
  return true;
}
```

If I finish checking everything:

```js
return false;
```

---
