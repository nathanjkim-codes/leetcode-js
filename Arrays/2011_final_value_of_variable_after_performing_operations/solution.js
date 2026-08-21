const finalValue = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("-")) {
      x -= 1;
    } else {
      x += 1;
    }
  }

  return x;
};
