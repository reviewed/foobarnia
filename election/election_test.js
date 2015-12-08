var test = require('tape');
var election = require('./election')

test('majority win', function (t) {
  t.plan(1);
  var votes = [2,2,5,1,5,7,5,5,1,5,2];
  var results = election.tally(votes);
  t.same(results, [5]);
});

test('election runoff', function(t) {
  t.plan(1);
  var votes = [7,8,3,3,3,8,2,4,4,4,2,2,4,2,3,4,5,3,4,4];
  var results = election.tally(votes);
  results.sort( function(a,b) { a - b } );
  t.same(results, [2,3,4]);
});

test('election runoff with tie', function(t) {
  t.plan(1);
  var votes = [8,9,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8];
  var results = election.tally(votes)
  results.sort( function(a,b) { a - b } );
  t.same(results, [1,2,3,4,5]);
});
