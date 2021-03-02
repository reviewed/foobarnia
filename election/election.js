/** @format */

exports.tally = function (votes) {
    // { 'id': $VOTES, 'id2': $VOTES2 }
    const numVotes = votes.length
    let mondo = {
        max: {},
        all: {},
    }

    let third = 0
    let first = 0
    let second = 0
    for (let i = 0; i < numVotes; i++) {
        const vote = votes[i].toString()
        if (mondo.all[vote]) {
            mondo.all[vote] += 1
        } else {
            mondo.all[vote] = 1
        }
        const amnt = mondo.all[vote]
        if (amnt >= third) {
            mondo.max[vote] = amnt
            let maxVals = Object.values(mondo.max)
            if (amnt > first) {
                // if there is an entry that is equal to the current high, then we can update the second place value
                const hasHigh = maxVals.find((val) => val === first)
                if (hasHigh) {
                    // if there is someone in second then we can update that too
                    const hasSecond = maxVals.find((val) => val === second)
                    if (hasSecond) {
                        third = second
                    }
                    second = first
                }
                first = amnt
            } else if (amnt < first && amnt > second) {
                // if the new amnt is between first and second
                // if there is another entry in second then we can update third place to be that value
                const hasSecond = maxVals.find((val) => val === second)
                if (hasSecond) {
                    third = second
                }
                second = amnt
            } else if (amnt < second && amnt > third) {
                // if the new amnt is between third and second then we can update third
                third = amnt
            }
            // get rid of any entries that are less than the third
            Object.keys(mondo.max).forEach((key) => {
                if (mondo.max[key] < third) {
                    delete mondo.max[key]
                }
            })
        }
    }
    let keys = Object.keys(mondo.max)
    const firstPlace = keys.filter((key) => mondo.max[key] === first)
    const secondPlace = keys.filter((key) => mondo.max[key] === second)
    const thirdPlace = keys.filter((key) => mondo.max[key] === third)
    // if ya got a majority then ya good
    if (first >= numVotes / 2) {
        return [Number(firstPlace[0])]
    }
    // else we just add the groups together
    let winners = firstPlace.map((id) => Number(id))
    // if there are less than 3 in first place then we can add second
    if (winners.length < 3) {
        winners = winners.concat(secondPlace.map((id) => Number(id)))
    }
    // same as above just for third ^
    if (winners.length < 3) {
        winners = winners.concat(thirdPlace.map((id) => Number(id)))
    }
    return winners.sort((a, b) => a - b)
}
