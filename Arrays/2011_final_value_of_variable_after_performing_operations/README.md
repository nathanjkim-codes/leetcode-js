# 2011. Final Value of Variable After Performing Operations

## Problem

Given an array of operations, start with `x = 0` and update `x` based on each operation.

`++X` or `X++` increases `x` by `1`.

`--X` or `X--` decreases `x` by `1`.

Example:

Input:

```js
operations = ["--X", "X++", "X++"];
```

Output:

```js
1;
```

---

## My Solution

- Created a variable `x` starting at `0`.

- Used a `for` loop to go through each operation.

- Used `operations[i]` to access the current operation.

- Used `.includes("-")` to check if the current operation decreases `x`.

- Used `x -= 1` for decrement and `x += 1` for increment.

- Returned `x` after all operations were processed.

---

## What I Learned

- How to iterate through an array using `operations.length`.

- The difference between the whole `operations` array and the current item `operations[i]`.

- How `.includes()` can check whether a string contains a specific character.

- `x += 1` means `x = x + 1`.

- `x -= 1` means `x = x - 1`.

- A variable created inside a function belongs to that function call. Each time the function runs, a new `x = 0` is created.

- `return` ends the function, so placing it inside the loop would stop the function before all operations are processed. `return x` should come after the loop so all operations are completed first.

---
