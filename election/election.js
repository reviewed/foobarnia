exports.tally = function electionCount(votes) {
  //Create object with tally tallied per candidate
  //set empty tally object
  let tally = {};
  //loop through votes array from beginning to end
  for (var i = 0; i < votes.length; i++) {
    //assign candidate value to iterated value of array
    let candidate = votes[i];
    //if candidate already has count in object than add vote if not set vote count to 1
    tally[candidate] = tally[candidate] ? tally[candidate] + 1 : 1;
  }
  //set variable for vote count needed to pass majority
  let majorityVote = Math.floor(votes.length / 2);

  //Create an array in descending order of number of votes
  //set empty
  var voteCount = [];
  for (key in tally) {
    var value = tally[key];
    voteCount.push(value);
  }
  voteCount = voteCount.sort(function (a, b) {
    return b - a;
  });

  //Present Top Candidates or Majority Winner
  //check to see if winner is greater or equal to majority
  if (voteCount[0] >= majorityVote) {
    //loop through tally object
    for (let key in tally) {
      //if key value pair in tally object is found return winner
      if (tally[key] === voteCount[0]) {
        return [Number(key)];
      }
    }
  } else {
    //set final
    let finalWinners = [];
    //loop through tally object by key
    for (let key in tally) {
      //if winners present in tally object and correspond to voteCount array then push values into finalWinners array
      if (
        tally[key] === voteCount[0] ||
        tally[key] === voteCount[1] ||
        tally[key] === voteCount[2]
      ) {
        finalWinners.push(Number(key));
      }
    }
    return finalWinners;
  }
};
