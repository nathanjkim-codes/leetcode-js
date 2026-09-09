# 1773. Count Items Matching a Rule

## Problem

Given a 2D array called `items`, count how many items match the given `ruleKey` and `ruleValue`.

Each item has this structure:

```text
[type, color, name]
   0     1     2
```

### Example

**Input**

```text
items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"]
]

ruleKey = "color"
ruleValue = "silver"
```

**Output**

```text
1
```

Because:

```text
["phone", "blue", "pixel"]
           ↓
"blue" === "silver" ❌

["computer", "silver", "lenovo"]
               ↓
"silver" === "silver" ✅

["phone", "gold", "iphone"]
           ↓
"gold" === "silver" ❌

count = 1
```

---

## My Pseudocode

1. Create a `count` variable starting at `0`.
2. Create a `ruleIndex` variable.
3. Check the `ruleKey`.
4. If the rule is `type`, use index `0`.
5. If the rule is `color`, use index `1`.
6. If the rule is `name`, use index `2`.
7. Iterate through every item.
8. Compare the value at `ruleIndex` with `ruleValue`.
9. If they match, increase `count`.
10. After the loop finishes, return `count`.

---

## My Solution

```js
function countMatches(items, ruleKey, ruleValue) {
  let count = 0;
  let ruleIndex;

  if (ruleKey === "type") {
    ruleIndex = 0;
  } else if (ruleKey === "color") {
    ruleIndex = 1;
  } else if (ruleKey === "name") {
    ruleIndex = 2;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleIndex] === ruleValue) {
      count++;
    }
  }

  return count;
}
```

---

## What I Learned

### 1. How to access values in a 2D array

```js
items[i][ruleIndex];
```

`i` selects the item:

```text
items[i]
↓
["computer", "silver", "lenovo"]
```

Then `ruleIndex` selects a value inside that item:

```text
items[i][1]
↓
"silver"
```

---

### 2. `ruleKey` tells me WHERE to look

```text
"type"  → index 0
"color" → index 1
"name"  → index 2
```

So:

```js
if (ruleKey === "color") {
  ruleIndex = 1;
}
```

---

### 3. `ruleValue` tells me WHAT to look for

If:

```js
ruleValue = "silver";
```

then:

```js
items[i][ruleIndex] === ruleValue;
```

asks:

```text
Does the current item's value
match "silver"?
```

---

### 4. Use `count` when the output is a number

The answer isn't an array.

I only need to know how many matches there are:

```js
let count = 0;
```

Every match:

```js
count++;
```

---

### 5. `return` should happen after the loop

Wrong:

```js
for (...) {
  // check item
  return count; // ❌ stops after first iteration
}
```

Correct:

```js
for (...) {
  // check every item
}

return count; // ✅
```

Remember:

```text
count++ → during the loop

return count → after the loop
```

---

## Mistakes / Things I Needed to Understand

- I first needed to figure out how `ruleKey` connects to an array index.
- I learned that `ruleIndex` is a better name than `resultIndex`.
- I needed a `count` variable because the output is a number, not an array.
- I learned that `ruleValue` does not need its own `if/else`; it is already the value I compare against.
- I considered using `&&`, but an `if` statement is clearer here.
- I initially put `return count` inside the loop, which would stop the function too early.

---

## Data Flow

```text
items + ruleKey + ruleValue
↓
ruleKey
↓
find ruleIndex

"color"
↓
ruleIndex = 1
↓
count = 0
↓
i selects an item
↓
items[i]
↓
items[i][ruleIndex]
↓
compare with ruleValue
↓
match?
├── YES → count++
└── NO  → continue
↓
next item
↓
finish loop
↓
return count
```

---

## What to Remember

### 2D array access

```js
items[i][ruleIndex];
```

Think:

```text
i
→ WHICH item?

ruleIndex
→ WHICH value inside that item?
```

### Counting pattern

```text
Need to know HOW MANY match
↓
let count = 0
↓
loop
↓
if match
↓
count++
↓
return count
```
