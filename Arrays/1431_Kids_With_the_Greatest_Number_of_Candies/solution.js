const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

let highestCandies = 0;

function GreatestNumberOfCandies(candies, extraCandies) {
  let highestCandies = 0;
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > highestCandies) {
      highestCandies = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    let addCandies = candies[i] + extraCandies;

    result.push(addCandies >= highestCandies ? true : false);
  }
  return result;
}
