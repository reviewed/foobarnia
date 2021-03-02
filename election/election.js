exports.tally = function(votes) {
  // TODO implement tally()

  let tally = {}

  votes.forEach(element => {
    tally[element]
      ? tally[element] += 1
      : tally[element] = 1
  });

  let votesPerCandidate = getObjectValues(tally)
  let highestVoteCount = Math.max(...votesPerCandidate)
  let totalVoteCount = sumOfObjectValues(votesPerCandidate)
  let majority = checkForMajority(highestVoteCount,totalVoteCount);

  if (majority) {
    let candidateId = findKeyFromValues(tally, highestVoteCount);
    return [Number(candidateId)]
  }

  let runoffCount = 0
  let runoffCandidates = []
  let tallyCopy = tally

  while (runoffCount < 3) {
    let votesPerCandidate = getObjectValues(tally)
    let keyToRunoff = findKeyFromValues(tallyCopy, Math.max(...votesPerCandidate))

    runoffCandidates.push(Number(keyToRunoff))

    delete tallyCopy[keyToRunoff]

    runoffCount += 1

    if (runoffCount === 2) {
      let nextHighestVoteCount = Math.max(...Object.values(tallyCopy))
      let runnOffers = filterKeysFromValues(tallyCopy, nextHighestVoteCount)
      runnOffers.forEach(element => runoffCandidates.push(Number(element)))
      return runoffCandidates.sort()
    }
  }
  return runoffCandidates.sort()
}

const MAJORITY = 0.5

const getObjectValues = (object) => Object.values(object);

const sumOfObjectValues = (object) => object.reduce((red, sum) => red + sum);

const findKeyFromValues = (object, number) => Object.keys(object).find(key => object[key] === number);

const filterKeysFromValues = (object, number) => {
  return Object.keys(object).filter(key => object[key] === number);
}

const checkForMajority = (maxVotedFor, totalVotes) => {
  return (maxVotedFor / totalVotes) > MAJORITY
    ? true
    : false
}
