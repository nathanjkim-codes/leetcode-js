# 1. Two Sum

## Problem

Given an array of numbers and a target number, find two numbers that add up to the target.

Return the indexes of those two numbers.

### Example

**Input**

```text
nums = [2,7,11,15]
target = 9
```

**Output**

```text
[0,1]
```

Example:

```text
nums[0] = 2
nums[1] = 7

2 + 7 = 9

i = 0
j = 1

result = [0,1]
```

---

## My Pseudocode

1. Create an empty result array.
2. Iterate through each number with `i`.
3. Iterate through the numbers after `i` with `j`.
4. Add `nums[i]` and `nums[j]`.
5. If the sum equals `target`, push `i` into result.
6. Push `j` into result.
7. Return result.

## My Solution

- Created an empty array called `result`.
- Used `i` to select the current number.
- Used `j` to check the numbers after `i`.
- Started `j` at `i + 1`.
- Added `nums[i]` and `nums[j]`.
- Compared the sum with `target`.
- Pushed `i` and `j` into `result` when the sum matched.
- Returned `result` after checking the numbers.

```js
function twoSum(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
}
```

---

## What I Learned

- `i` represents the current index.

```js
nums[i];
```

- `j` represents the second index that I compare with `i`.

```js
nums[j];
```

- For this problem, `j` starts at `i + 1` because I only need to check the numbers after `i`.

```js
for (let j = i + 1; j < nums.length; j++)
```

This prevents me from comparing the same element with itself.

```text
i = 0
j starts at 1

i = 1
j starts at 2

i = 2
j starts at 3
```

- The comparison needs to be:

```js
nums[i] + nums[j] === target;
```

This asks:

```text
Do these two numbers
add up to the target?
```

- Two Sum wants the indexes, not the values.

```text
nums = [2,7,11,15]

2 + 7 = 9

values = [2,7]
indexes = [0,1]
```

So I push:

```js
result.push(i);
result.push(j);
```

- `result` can use `const` because I do not replace the array.

```js
const result = [];
```

I only change what is inside the array with:

```js
result.push(i);
result.push(j);
```

---

## Mistakes

- At first, I needed to understand whether the output should contain the numbers or their indexes.
- I learned that Two Sum returns the indexes.
- I learned that `j` should start at `i + 1` because I only need to check the numbers after `i`.
- I wasn't sure whether I needed to create a `result` array.
- I learned that I can push `i` and `j` into `result`.
- I learned that I could also directly use `return [i, j]` when I find the answer.
- I learned that my current solution continues the loops and returns `result` after the loops finish.

---

## Data Flow

```text
nums + target
↓
create result = []
↓
i selects current number
↓
j starts at i + 1
↓
nums[i] + nums[j]
↓
nums[i] + nums[j] === target ?
↓
Yes → result.push(i)
↓
result.push(j)
↓
Finish loops
↓
return result
```
