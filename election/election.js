
// Comment: Stopping here. I think the directions describe a more nuanced 
// function than the tests account for. 

exports.tally = function(votes) {
	const winners = []
	//1. map with index
	var mappedVotesWithIndex = votes.map((num, i) => {
	    return {index: i, value: num}
		})

	//2. sort
	var sortedVotes = mappedVotesWithIndex.sort((a, b) => a.value - b.value).reverse()

	//3. check for Majority Win 
	var topWinner = sortedVotes[0]
 	var votesNeeded = (votes.reduce((a,b) => a + b) / 2
   ) + 1
 	var majWin = sortedVotes.some(vote=> vote.value >= votesNeeded) 
	
	if (majWin === true) {
		winners = topWinner.index
		
	}
			//4. check for runOff scenarios
	const noTie = (sortedVotes[2].value !== sortedVotes[3].value) 
		// //4a. check for third-place tie
		 //if true, use top Three winners, if false, go to runOff with Tie 
		if (noTie === true) { 
				const TopThreeWinners = [sortedVotes[0].index, sortedVotes[1].index, sortedVotes[2].index ]
				return TopThreeWinners 
			}

		//5 check for how many are the same as sortedVotes[2].value

		var findTieArray = [...sortedVotes]
				//remove top two
		var topTwoWinners = findTieArray.splice(0,2)
		//prep topTwoWinners for final array, need indices 
		var topTwoWinnersIndices = topTwoWinners.map(t => t.index)

		var tieValue = findTieArray[0].value //capture tied value to check how many there and result
		
		//create array with tied winners, and get their indices
		var tieWinners = sortedVotes.filter(v => v.value === tieValue)
		var tieWinnersIndices = tieWinners.map(t => t.index)

		//create final array of winners, and flatten to remove array of arrays 
		//test doesn't like flatten -- concat instead. 
		allWinners = [topTwoWinnersIndices.concat(tieWinnersIndices)]

		return winners = 
}

