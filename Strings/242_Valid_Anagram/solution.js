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
