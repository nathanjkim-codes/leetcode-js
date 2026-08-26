# 1672. Richest Customer Wealth

## Problem

Given a 2D array called `accounts`, each row represents one customer.

Each number inside a row represents the amount of money that customer has in one bank account.

Find and return the wealth of the richest customer.

Example:

Input:

```js
accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
```

Output:

```js
10;
```

Explanation:

```text
Customer 0 → 1 + 5 = 6
Customer 1 → 7 + 3 = 10
Customer 2 → 3 + 5 = 8

Highest wealth = 10
```

---

## My Pseudocode

1. Iterate through the array.
2. Iterate through the elements of each array.
3. Get the sum of the element values.
4. Compare each total value.
5. Find the highest value.

---

## My Solution

- Used a nested `for` loop to work with a 2D array.
- Used `i` to iterate through each customer/row.
- Used `j` to iterate through each account value inside the current row.
- Created `setTotalWealth` to calculate the total wealth of the current customer.
- Reset `setTotalWealth` to `0` for each new customer.
- Used `accounts[i][j]` to access the current account value.
- Used `+=` to add each account value to `setTotalWealth`.
- Compared each customer's total wealth with `highestWealth`.
- Updated `highestWealth` when a larger total was found.
- Returned the highest wealth after checking all customers.

---

## What I Learned

- A 2D array is an array that contains arrays.

- `accounts[i]` gives the current row.

- `accounts[i][j]` gives a value inside the current row.

- `i` is the index used to move through the outer array.

- `j` is the index used to move through the values inside the current row.

- `accounts.length` tells me how many rows are in the outer array.

- `accounts[i].length` tells me how many values are inside the current row.

- A nested loop is a loop inside another loop.

```js
for (let i = 0; i < accounts.length; i++) {
  for (let j = 0; j < accounts[i].length; j++) {
    // current value: accounts[i][j]
  }
}
```

- `setTotalWealth += accounts[i][j]` means:

```js
setTotalWealth = setTotalWealth + accounts[i][j];
```

`i` and `j` are not being added together. They are used to locate the current value in the 2D array, and that value is added to `setTotalWealth`.

- `setTotalWealth` needs to be created inside the outer loop because every customer needs to start with a new total of `0`.

- `highestWealth` should not reset for every customer because it needs to remember the highest wealth found so far.

```text
Function → What job needs to be done?
Loop     → What needs to be repeated?
If       → What decision needs to be made?
Variable → What value needs to be remembered?
Return   → What result should leave the function?
```

---

## Data Flow

```text
accounts
↓
Choose a customer with i
↓
Start setTotalWealth = 0
↓
Use j to visit each account value
↓
accounts[i][j]
↓
Add current value to setTotalWealth
↓
Finish calculating customer's wealth
↓
Compare with highestWealth
↓
Update highestWealth if necessary
↓
Move to next customer
↓
Return highestWealth
```

---
