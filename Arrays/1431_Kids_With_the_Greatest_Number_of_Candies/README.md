# 1431. Kids With the Greatest Number of Candies

## Problem

Given an array called `candies` and a number called `extraCandies`.

Imagine giving all of the extra candies to **one kid at a time**.

Check if that kid would then have the greatest number of candies.

Return an array of `true` and `false`.

Example:

```js
candies = [2, 3, 5, 1, 3];
extraCandies = 3;
```

Output:

```js
[true, true, true, false, true];
```

Explanation:

```text
Original greatest = 5

2 + 3 = 5 → true
3 + 3 = 6 → true
5 + 3 = 8 → true
1 + 3 = 4 → false
3 + 3 = 6 → true
```

Important: We are not giving 3 candies to every kid at the same time. We test one kid at a time.

---

## My Pseudocode

1. Find the greatest value in the original array.
2. Store the greatest value.
3. Iterate through the array again.
4. Add `extraCandies` to the current value.
5. Compare the new value with the original greatest value.
6. Store `true` or `false`.
7. Return the Boolean array.

---

## My Solution

- Used the first `for` loop to find and store `highestCandies`.
- Used the second `for` loop to check each kid.
- Used `candies[i] + extraCandies` to calculate the current kid's new amount.
- Compared the new amount with `highestCandies`.
- Created `result` to collect the Boolean values.
- I chose to use a ternary for the second condition to return `true` or `false`.
- Used `push()` to add each Boolean to `result`.
- Returned `result` after checking every kid.

---

## What I Learned

- Find the greatest value first so I have a value to compare against.

```js
if (candies[i] > highestCandies) {
  highestCandies = candies[i];
}
```

- `addCandies` holds the current kid's new amount, not an array.

```js
let addCandies = candies[i] + extraCandies;
```

- I used a ternary to choose between `true` and `false`.

```js
result.push(addCandies >= highestCandies ? true : false);
```

The ternary means:

```text
condition ? true : false

5 >= 5 ? true : false
↓
true
```

- The comparison itself already returns a Boolean, so the ternary could also be simplified later to:

```js
result.push(addCandies >= highestCandies);
```

- `result` is outside the loop so every iteration adds to the same array.

```text
[]
↓
[true]
↓
[true, true]
↓
[true, true, true]
↓
[true, true, true, false]
↓
[true, true, true, false, true]
```

---

## Data Flow

```text
candies = [2, 3, 5, 1, 3]

↓

Find greatest value

↓

highestCandies = 5

↓

Check each kid one at a time

↓

candies[i] + extraCandies

↓

Compare with highestCandies

↓

true or false

↓

Push into result

↓

Return result

↓

[true, true, true, false, true]
```

---

## My Code

```js
function greatestNumberOfCandies(candies, extraCandies) {
  let highestCandies = 0;
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > highestCandies) {
      highestCandies = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    let addCandies = candies[i] + extraCandies;

    result.push(addCandies >= highestCandies ? true : false);
  }

  return result;
}
```
