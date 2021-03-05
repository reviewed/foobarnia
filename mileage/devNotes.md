
Data Mining for fun 
Color = fuel efficiency
Csv file — results 
Command line script — median mileage for cars of any given color 
Ruby mileage.rb <color> 
Teal isn’t working 
— Debug and fix the script 
— Add test to cover the fix 
— Filter by price range 
— Filter by fuel type 

1. learn about CSV, which has been on my list 
2. learn about minitest, since I've only used RSPEC
3. what's ARGV? 
   -- pulls in command line input; read some blog posts and the docs on it; made a file and tested it out.  
4. So, tests don't catch the error. What are they missing? 
5. Figure out the code 
    -- two classes, Auto, AutoSeeker
   -- AutoSeeker.rb -- gives #filter, authos, and self.median_mileage
    --reminders: #send -- invokes another method by name 
7.ArgumentError: sort': comparison of NilClass with String failed
    -- likely fix: needs a catch, in case there are any null values 
    -- quick check of data shows that line 816,Teal,26957.47,,hybrid has no value 
    -- where would I put this check -- 
        -- is goal to clean up all data before it's initialized? 
        
    -- working with array of arrays 
8. Filter_by_price: pull some data and play it on replit, 
    -- bring in choice with ARGV (so much nicer than #gets.chomp(!)
    -- think about CLI skills -- choice is the variable, use conditional to pull it out. 
    -- I am freezing on a refactor to make this less verbose... okay for now. 
    -- refactor read out for abstraction. TODO: find the abstraction in the 
    -- TODO: what would test look like: make sure choice is there,
9. Filter_by_Fuel_Type 
  -- similar to filter_by_price, but simpler, no need to convert cli input to integers. Done. Tricky part was debugging, because auto.rb hadn't included it in the attr_reader (and my screen was small, so I didn't see it right away!)
  

