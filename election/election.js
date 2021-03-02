exports.tally = function (votes) {
  // CASES:
  // 1. If majority (most common vote > 50% total votes), return array with single element of that vote (return [1])
  // 2. If no majority (most common vote <= 50% total votes), return array with top 3 most common votes (return [1,2,3])
  // 3. If no majority and tie for 3rd, return array with top 2 most common votes and all those tied for 3rd (return [1,2,3,4...])

  // Notes for refactor:
  // Add rules to compute winners while reduce is looping or right after.
  // (If a certain spread of votes occurs, we can know how many votes are required to win)
  // Rework case tests to be more dynamic if more tests are required.

  const totalVotes = votes.length;
  const majorityCount = Math.floor(totalVotes / 2) + 1;

  let results = [];

  // Reduce votes and return winners
  const candidatesObj = votes.reduce((votesObj, vote) => {
    let count = votesObj[vote] ? (votesObj[vote].count += 1) : 1;
    return {
      ...votesObj,
      [vote]: {
        candidate: vote,
        count: count,
      },
    };
  }, {});

  // Back to arary and sort based on count
  let candidatesArr = Object.values(candidatesObj).sort(
    (candA, candB) => candB.count - candA.count
  );

  // Case 1: Majority Win
  if (candidatesArr[0].count >= majorityCount) {
    results = [candidatesArr[0].candidate];
  }
  // Case 2: No Majority with no tie after 3rd index
  else if (candidatesArr[2].count !== candidatesArr[3].count) {
    results = [
      candidatesArr[0].candidate,
      candidatesArr[1].candidate,
      candidatesArr[2].candidate,
    ];
  }
  // Case 3: No Majority with a tie after 3rd index
  else {
    candidatesArr.forEach((candidate, index) => {
      if (index < 3) {
        results.push(candidate.candidate);
      } else if (candidate.count == results[2]) {
        // if count is equal to the count tied at 3, keep pushing
        results.push(candidate.candidate);
      }
    });
    results.reverse();
  }
  // tests require a specific order despite the readme
  return results.reverse();
};
