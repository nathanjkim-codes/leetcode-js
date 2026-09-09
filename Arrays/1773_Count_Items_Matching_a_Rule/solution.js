const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];

const ruleKey = "color";
const ruleValue = "silver";

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
