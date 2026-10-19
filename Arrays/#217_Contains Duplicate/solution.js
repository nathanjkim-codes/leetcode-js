function containsDuplicate(numbers) {
  const seen = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      return true;
    }
    seen.add(numbers[i]);
  }
  return false;
}
