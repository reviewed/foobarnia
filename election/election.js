exports.tally = function(votes) {
  // TODO implement tally()

  let tallyObject = tallyInitialVotes(votes)
  let votesPerCandidate = getObjectValues(tallyObject)
  let highestVoteCount = Math.max(...votesPerCandidate)
  let totalVoteCount = sumOfObjectValues(votesPerCandidate)
  let majority = hasMajority(highestVoteCount,totalVoteCount);

  if (majority) {
    let candidateId = findKeyFromValues(tallyObject, highestVoteCount);
    return [Number(candidateId)]
  }

  // If no majority, continue to run off determination
  let runoffCount = 0
  let runoffCandidates = []
  let tallyCopy = tallyObject

  while (runoffCount < 3) {
    let votesPerCandidate = getObjectValues(tallyCopy)
    let keyToRunoff = findKeyFromValues(tallyCopy, Math.max(...votesPerCandidate))

    runoffCandidates.push(Number(keyToRunoff))

    delete tallyCopy[keyToRunoff]

    runoffCount += 1

    if (runoffCount === 2) {
      let nextHighestVoteCount = Math.max(...Object.values(tallyCopy))
      let thirdPlaceTie = filterKeysFromValues(tallyCopy, nextHighestVoteCount)

      thirdPlaceTie.forEach(element => runoffCandidates.push(Number(element)))

      return runoffCandidates.sort()
    }
  }
  return runoffCandidates.sort()
}

const MAJORITY = 0.5

const tallyInitialVotes = (array, object) => {
  object = {}

  array.forEach(element => {
    object[element]
      ? object[element] += 1
      : object[element] = 1
  });

  return object;
}

const getObjectValues = (object) => {
  return Object.values(object);
}

const sumOfObjectValues = (object) => {
  return object.reduce((red, sum) => red + sum);
}

const findKeyFromValues = (object, number) => {
  return Object.keys(object).find(key => object[key] === number);
}

const filterKeysFromValues = (object, number) => {
  return Object.keys(object).filter(key => object[key] === number);
}

const hasMajority = (maxVotedFor, totalVotes) => {
  return (maxVotedFor / totalVotes) > MAJORITY
    ? true
    : false
}
