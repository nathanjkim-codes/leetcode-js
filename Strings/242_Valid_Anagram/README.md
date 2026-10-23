# 242. Valid Anagram

## Problem

Given two strings `s` and `t`, check if they have the same letters.

The letters can be in a different order, but each letter must appear the same number of times.

Return `true` if they are anagrams.

Return `false` if they are not.

### Example

**Input**

```text
s = "anagram"
t = "nagaram"
```

**Output**

```text
true
```

Example:

```text
s = "aab"
t = "aba"

s has:
a = 2
b = 1

t has:
a = 2
b = 1

Both strings have the same letters.

return true
```

---

## My Pseudocode

1. Check if both strings have the same length.
2. If the lengths are different, return `false`.
3. Create an empty object to count letters.
4. Use a `for` loop to go through the first string `s`.
5. Count how many times each letter appears.
6. Use another `for` loop to go through the second string `t`.
7. Check if each letter has an available count.
8. If the letter is missing or its count is zero, return `false`.
9. Subtract `1` from the count for each matching letter.
10. If the second loop finishes, return `true`.

## My Solution

- Used `.length` to check if both strings have the same length.
- Created an empty object called `counts`.
- Used the first `for` loop to count the letters in `s`.
- Used `s[i]` to get the current letter.
- Used `counts[letter]` to store how many times each letter appears.
- Used the second `for` loop to check the letters in `t`.
- Returned `false` if a letter was missing or already used up.
- Used `-= 1` to decrease the count.
- Returned `true` after checking all letters.

```js
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    counts[letter] = (counts[letter] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];

    if (!counts[letter]) {
      return false;
    }

    counts[letter] -= 1;
  }

  return true;
}
```

---

## What I Learned

- An anagram means two strings have the same letters with the same counts.

```text
"abc" and "bca" → true
"abc" and "abd" → false
```

- A Hash Map stores information using keys and values.

```js
const counts = {
  a
```
