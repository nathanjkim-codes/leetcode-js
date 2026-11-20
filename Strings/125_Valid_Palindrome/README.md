# 125. Valid Palindrome

## Problem

Given a string `s`, check if it reads the same forward and backward.

Ignore spaces, special characters, and uppercase letters.

Return `true` if it is a palindrome.

Return `false` if it is not.

### Example

**Input**

```text
s = "A man, a plan, a canal: Panama"
```

**Output**

```text
true
```

Example:

```text
s = "racecar"

left = r
right = r

r === r → true
a === a → true
c === c → true

All characters matched.

return true
```

---

## My Pseudocode

1. Convert the string to lowercase.
2. Remove spaces and special characters.
3. Create two pointers, `left` and `right`.
4. Start `left` at index `0`.
5. Start `right` at the last index.
6. Compare the characters at both pointers.
7. If they are different, return `false`.
8. Move both pointers toward the middle.
9. If all characters match, return `true`.

## My Solution

- Used `.toLowerCase()` to convert uppercase letters to lowercase.
- Used `.replace()` to remove special characters.
- Used `left` to start from the beginning.
- Used `right` to start from the end.
- Used a `while` loop to compare characters.
- Returned `false` when two characters were different.
- Moved both pointers toward the middle.
- Returned `true` after all comparisons finished.

```js
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```

---

## What I Learned

- A palindrome reads the same forward and backward.

```text
"racecar" → true
"hello" → false
```

- `.toLowerCase()` converts uppercase letters to lowercase.

```js
"HELLO".toLowerCase(); // "hello"
```

- `.replace()` can remove characters from a string.

```js
s.replace(/[^a-z0-9]/g, "");
```

This removes characters that are not lowercase English letters or numbers.

- Two Pointers means using two indexes to check data.

```js
let left = 0;
let right = s.length - 1;
```

- `while` repeats code while the condition is true.

```js
while (left < right)
```

- `left++` moves the left pointer forward.

- `right--` moves the right pointer backward.

- `!==` checks if two values are different.

```js
if (s[left] !== s[right]) {
  return false;
}
```

---

## Mistakes / Bugs to Remember

**Bug 1 — Forgetting to remove spaces**

```text
"A man, a plan, a canal: Panama"
```

If I compare the original string, spaces and punctuation can cause incorrect results.

Fix: Clean the string before comparing.

**Bug 2 — Wrong last index**

```js
let right = s.length;
```

This starts outside the string.

Fix:

```js
let right = s.length - 1;
```

**Bug 3 — Forgetting to move the pointers**

If I don't update `left` and `right`, the `while` loop can run forever.

Fix:

```js
left++;
right--;
```

---

## Data Flow

```text
Input string
↓
Convert to lowercase
↓
Remove special characters
↓
Set left = 0
↓
Set right = s.length - 1
↓
Compare s[left] and s[right]
↓
Different?
↓
Yes → return false
↓
No → move both pointers
↓
left++
right--
↓
Repeat until left >= right
↓
return true
```

### Example Data Flow

```text
s = "racecar"

Index:  0 1 2 3 4 5 6
String: r a c e c a r

left = 0
right = 6

r === r → true

left = 1
right = 5

a === a → true

left = 2
right = 4

c === c → true

left = 3
right = 3

Loop stops.

return true
```

---

## What to Remember

When I need to compare characters from both ends:

```js
let left = 0;
let right = s.length - 1;
```

Compare:

```js
if (s[left] !== s[right]) {
  return false;
}
```

Move both pointers:

```js
left++;
right--;
```

If all characters match:

```js
return true;
```

**Important concepts:**

```text
Palindrome = Same forward and backward

Two Pointers = Two indexes

left = First index

right = Last index

while = Repeat while condition is true

!== = Not equal

return false = Characters do not match

return true = Valid palindrome
```

---
