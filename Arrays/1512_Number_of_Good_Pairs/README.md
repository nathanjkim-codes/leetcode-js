# 1512. Number of Good Pairs

## Problem

Given an array of numbers, count how many good pairs exist.

A pair is good when the two values are equal and `i < j`.

### Example

**Input**

```text
nums = [1,2,3,1,1,3]
```

**Output**

```text
4
```

The good pairs are:

```text
nums[0] === nums[3] → 1 === 1
nums[0] === nums[4] → 1 === 1
nums[2] === nums[5] → 3 === 3
nums[3] === nums[4] → 1 === 1
```

---

## My Solution

- Created a counter called `count` starting at `0`.
- Used an outer `for` loop with `i` to select the current value.
- Used an inner `for` loop with `j` to check the values after `i`.
- Started `j` at `i + 1` so I don't compare the same element with itself.
- Compared the values using `nums[i] === nums[j]`.
- Increased `count` when a matching pair was found.
- Returned `count` after both loops finished.

```js
function findGoodPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }

  return count;
}
```

---

## What I Learned

- `i` and `j` are index variables.

```text
i = current position
j = position after i
```

- `j` starts at `i + 1`.

```text
i = 0 → j starts at 1
i = 1 → j starts at 2
i = 2 → j starts at 3
```

- `nums[i] === nums[j]` compares the values, not the indexes.

```text
nums[0] === nums[3]

1 === 1 → true
```

- Nested loops can compare one element with all the elements after it.

- `count++` increases the number of good pairs.

- `return count` goes after the loops because I need to check every pair first.

---

## Mistakes

- At first, I used an empty string instead of a number for the result.

```js
let result = ""; // wrong for counting

let count = 0; // correct
```

- At first, I started `j` at `0`.

- Then I thought `j` should always start at `1`.

- I learned that `j` needs to start at `i + 1` because it should always start after the current `i`.

- I almost used `return count++`, but learned that `return` would stop the function too early.

---

## Data Flow

```text
nums
↓
i selects current value
↓
j starts at i + 1
↓
Compare nums[i] === nums[j]
↓
Match?
↓
Yes → count++
↓
Continue checking
↓
All pairs checked
↓
return count
```
