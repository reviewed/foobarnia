# Data Mining fun

The Foobarnian Environment Ministry has a theory that the color of their
cars somehow affects fuel efficiency. They created a CSV file with the
results of a survey, and had a contractor write a command line script to
calculate the median mileage for cars of any given color.

They run the script like this: `ruby mileage.rb <color>`

The script worked well enough for a while. But today they uploaded a new data
file, and suddenly they are getting a "weird error" whenever they search for
the color 'Teal'. Other colors like 'Puce' seem fine. But the Foobarnian
ministers are panicking because Teal is the national color.

They've kindly asked you to debug and fix this script so it once again returns
the median mileage for Teal cars.

You'll notice that the contractor wrote some tests, although not many, and some
code is not tested.

First, you'll want to fix the bug and add a test to cover the fix.

Then, the Foobarnians would like you to add a couple features:

1. a way to filter by a price range
2. a way to filter by fuel type

##### Also worth thinking about (don't need to actually do it):

Are there any other tests that should be added? Are there other ways the code
could be improved? How would you advise the Foobarnians on better ways to look at
this data?

- Additional tests to be added include checking for spelling errors of color names, making sure the color name strings are clean and do not contain symbols, testing for uppercase/lowercase

- In terms of improving the code I would recommend generally recommend not having nested loops, avoiding uneccessary variable assignments, avoiding uneccessary calls to uniq on arrays, using for loops instead of .each, being aware of which gems are added to project, optimizing the way to access global constants, using explicit returns in ruby.

- I would recommend the Foobarnians to incorporate other variables other than color in their data. They should include car age, 4x4 vs 2-wheel drive, type of car (SUV, sedan etc.), types of tires etc. that will have more impact than just color. I would also recommend they not run their cars using hamsters : )
