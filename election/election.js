exports.tally = function(votes) {
  // TODO implement tally()
  // Iterate over voting results and store vote count in an object
  let tally = {}

  votes.forEach(element => {
    tally[element]
      ? tally[element] += 1
      : tally[element] = 1
  });

  // Extract the values (votes) into an array
  let votesPerCandidate = getObjectValues(tally)

  // Find the highest vote count
  let highestVoteCount = Math.max(...votesPerCandidate)

  // Find the total vote count
  let totalVoteCount = sumOfObjectValues(votesPerCandidate)

  // Determine if there is a majority
  let majority = checkForMajority(highestVoteCount,totalVoteCount);

  if (majority) {
    let candidateId = getKeyFromValues(tally, highestVoteCount);
    return [Number(candidateId)]
  }
}

const getObjectValues = (object) => Object.values(object);

const sumOfObjectValues = (object) => object.reduce((red, sum) => red + sum);

const getKeyFromValues = (object, number) => {
  return Object.keys(object).find(key => object[key] === number);
}

const checkForMajority = (maxVotedFor, totalVotes) => {
  return (maxVotedFor / totalVotes)
    ? true
    : false
}
