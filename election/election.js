exports.tally = function(votes) {
  let majority = Math.floor(votes.length/2)
  let results = {}

  // calculate election results
  for (let candidate of votes) {
    let key = +candidate
    let voteCount = results[key] ? results[key]+1 : 1
    results[key] = voteCount
    // but stop if majority already voted for candidate 
    if(voteCount >= majority){
      return [key]
    }
  }

  // if we get here, we've got a run off
  let sorted = Object.keys(results).sort(
    (a,b) => -(results[a]-results[b])
  )

  // make sure there is no tie for 3rd place
  let winners = sorted.slice(0,3).map(k => +k)
  let runoffIndex = 3
  // if there is a tie, add them to the end of the winners array
  while(results[winners.slice(-1)[0]] === results[sorted[runoffIndex]]){
    winners.push(+sorted[runoffIndex])
    runoffIndex++
  }

  // directions say order doesnt matter but tests say different
  return winners.sort()
}
