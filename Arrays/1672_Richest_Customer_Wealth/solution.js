let highestWealth = 0;

function calculateWealth(accounts) {
  for (let i = 0; i < accounts.length; i++) {
    let setTotalWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      setTotalWealth += accounts[i][j];
    }
    if (setTotalWealth > highestWealth) {
      highestWealth = setTotalWealth;
    }
  }
}
