exports.tally = function(votes) {
	 var votes = [7,8,3,3,3,8,2,4,4,4,2,2,4,2,3,4,5,3,4,4]
	//1. map with index
	var mappedVotesWithIndex = votes.map((num, i) => {
	    return {index: i, value: num}
		})

	//2. sort
	var sortedVotes = mappedVotesWithIndex.sort((a, b) => a.value - b.value).reverse()

	//3. check for Majority Win 
	var majorityWin = (votes) => {
		 	var votesNeeded = (votes.reduce((a,b) => a + b) / 2
       ) + 1
		 	var majWin = sortedVotes.some(vote=> vote.value >= votesNeeded) 
			if (majWin === true) {
				return sortedVotes[0].index
			} else {
				runOff()
			}
		}

	//4. check for runOff scenarios
	const runOff = (votes) => {
		// //4a. check for third-place tie
		 //if true, use top Three winners, if false, go to runOff with Tie 
			const noTie = (sortedVotes[2].value !== sortedVotes[3].value) 
			

			if (noTie === true) { 
				const TopThreeWinners = [sortedVotes[0].index, sortedVotes[1].index, sortedVotes[2].index ]
				return TopThreeWinners 
			}	else {
				runOffWithTie()
				
			}
		}
		//5 check for how many are the same as sortedVotes[2].value
		var runOffWithTie = (votes, sortedVotes) => {
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
				allWinners = [topTwoWinnersIndices, tieWinnersIndices].flat()
				return allWinners
			}
}