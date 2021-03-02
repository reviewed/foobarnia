
// Comment: Stopping here. I think the directions describe a more nuanced 
// function than the tests account for. 

exports.tally = function(votes) {
	
	//1. map with index
	const mappedVotesWithIndex = votes.map((num, i) => {
	    return {index: i, value: num}
		})

	//2. sort
	const sortedVotes = mappedVotesWithIndex.sort((a, b) => a.value - b.value).reverse()

	//3. check for Majority Win 
	const majorityWin = (votes, sortedVotes) => {
		const topWinner = sortedVotes[0]
	 	const votesNeeded = (votes.reduce((a,b) => a + b) / 2
	   ) + 1
	 	const majWin = sortedVotes.some(vote=> vote.value >= votesNeeded) 
		
		if (majWin === true) {
			const majorityWinner = topWinner.index
		}
		return majorityWinner
	}
			//4. check for runOff scenarios
	const runOff = (votes, sortedVotes) => {
		const noTie = (sortedVotes[2].value !== sortedVotes[3].value) 
		// //4a. check for third-place tie
		 //if true, use top Three winners, if false, go to runOff with Tie 
		if (noTie === true) { 
				const TopThreeWinners = [sortedVotes[0].index, sortedVotes[1].index, sortedVotes[2].index ]	
		}
		return TopThreeWinners 
	}
		//5 check for how many are the same as sortedVotes[2].value
	const runOffWithTie = (votes, sortedVotes) => {

		const findTieArray = [...sortedVotes]
		//remove top two; protect original array
		const topTwoWinners = findTieArray.splice(0,2)
		
		//prep topTwoWinners for final allWinners array,  need indices 
		const topTwoWinnersIndices = topTwoWinners.map(t => t.index)

		//capture tied value to check how many there and result
		const tieValue = findTieArray[0].value 

		//create array with tied winners, and get their indices
		const tieWinners = sortedVotes.filter(v => v.value === tieValue)
		const tieWinnersIndices = tieWinners.map(t => t.index)

		//create final array of winners, and flatten to remove array of arrays 
		//test doesn't like flat() -- use concat instead. 
		const allWinners = [topTwoWinnersIndices.concat(tieWinnersIndices)]

		return allWinners
}

