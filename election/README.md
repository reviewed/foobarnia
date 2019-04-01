# It's Election Season!

The Foobarnian Ministry of Elections has asked us to tally all the votes for the
next Presidental Election. Fortunately, the requirements are very simple since
the Foobarnians are highly organized. We only need to write one function in
JavaScript.

The candidates are identified by positive integers, and the votes will be
provided to us as an unsorted Array of those integers.

  1. If any candidate reaches a majority of votes, the function should return a
single-element Array with the integer representing the winning candidate.
  2. If there is no majority winner, then a runoff election will be held among the 3
candidates that finished with the most votes. So in that case, our function
needs to return an array of integers for the top 3 candidates, to identify
candidates that qualified for the runoff.
  3. Also in the runoff case, if there are multiple 3rd place candidates in a tie,
then all candidates who tied for third place will qualify for the runoff. So in
that situation, an Array with more than three integers may need to be returned.

The results do not have to be sorted in any special order.

### Testing

Tests have already been written for these cases by a developer who always
writes the tests first, but she was suddenly called away to an important
meeting before she could write the actual function.

The tests were written using [Tape](https://github.com/substack/tape), a simple test runner for Node.js. To run the
tests, [install Node/npm](https://docs.npmjs.com/getting-started/installing-node) if you need to, then in the working directory, install tape with

`npm install`

Then you can run the tests with

`node election_test.js`

The 3 tests will currently fail. Once you get them passing, commit and push up
your code.

#### Performance Considerations

Once the tests are passing, consider this done. But, keep in mind, the tests
involve only a small sample of votes. In reality, the Republic of Foobarnia has a
huge population - **9007199254740992** to be exact - and *everyone* votes.

> Theoretically, as long as there is not a unanimous vote, we should be fine. If everyone DID vote for the same candidate, we could use BigInt. Beyond that, Arrays in JS have a max number of elements in the billions - significantly less than the quadrillions + 1 (that exceeds JS max num) - which would break our code well before all citizens could vote.

Furthermore, anyone can run for president simply by sending a postcard to the
election office, so there are typically *several thousand* candidates. How will
your function behave under these circumstances? 

> I tried to optimize out of the gate, by shortcircuit returning if we catch more votes than the majority, using an object literal as a counter, etc.

Should we be concerned about
performance? Is there any way we can make it faster?

>  However, one simple optimization would be to remove the final `.sort` in the return line
