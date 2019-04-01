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

Are there any other tests that should be added? 
> Tests for the additional filters would be great. More tests for `Auto` class would be nice.

Are there other ways the code could be improved? 
> Cleaning up the `mileage.rb` file into a class or module would be desirable.

How would you advise the Foobarnians on better ways to look at this data?
> Load it into a database and use something like (metabase)[https://metabase.com/]
