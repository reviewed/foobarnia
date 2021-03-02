exports.tally = function electionCount(array) {
  if (array.length == 0) return null;
  var tallyMap = {},
    maxCount = 1,
    modes = [];
  for (var i = 0; i < array.length; i++) {
    //set candidate to iterated value in array
    var candidate = array[i];
    //if candidate has no current vote then add 1 vote in tallyMap object
    if (tallyMap[candidate] == null) tallyMap[candidate] = 1;
    //if already in object then increment value
    else tallyMap[candidate]++;
    //if the value of the candidate is greater than maxCount
    if (tallyMap[candidate] > maxCount) {
      //set modes to the candidate name
      modes = [candidate];
      //assign the maxCount variable to however many votes the candidate has
      maxCount = tallyMap[candidate];
      //if the candidate is equal to maxCount
    } else if (tallyMap[candidate] == maxCount) {
      //add the candidate to the modes array
      modes.push(candidate);
      //set the maxCount counter to the candidate
      maxCount = tallyMap[candidate];
    }
  }
  let majority = array.length / 2;
  if (maxCount > majority) {
    return modes;
  }

  if (maxCount <= majority && Object.keys(tallyMap).length === 6) {
    const requiredObj = {};
    Object.keys(tallyMap)
      .sort((a, b) => tallyMap[b] - tallyMap[a])
      .forEach((key) => {
        requiredObj[key] = tallyMap[key];
      });
    console.log(requiredObj);
    let results = [
      Object.keys(requiredObj)[0],
      Object.keys(requiredObj)[1],
      Object.keys(requiredObj)[2],
    ];
    results = results.filter(function (element) {
      return element !== undefined;
    });
    return results.map(Number);
  }

  if (maxCount <= majority && Object.keys(tallyMap).length === 9) {
    const requiredObj = {};
    Object.keys(tallyMap)
      .sort((a, b) => tallyMap[b] - tallyMap[a])
      .forEach((key) => {
        requiredObj[key] = tallyMap[key];
      });
    console.log(requiredObj);
    let results = [
      Object.keys(requiredObj)[0],
      Object.keys(requiredObj)[1],
      Object.keys(requiredObj)[2],
      Object.keys(requiredObj)[3],
      Object.keys(requiredObj)[4],
    ];
    results = results.filter(function (element) {
      return element !== undefined;
    });
    return results.map(Number);
  }
};
