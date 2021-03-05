require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
choice = seeker.filter_by_price(ARGV[0])


# p AutoSeeker.find_price_range(choice)

# # next: divide autos by price, so ARGV input can match 
# # 1/low < 20,000
# # 2/medium >20,001 and >30,000
# # 3/high >30,001

# cars_in_price_range = AutoSeeker.pick_price_range(range)

# puts "these cars are in your price range: #{cars_in_price_range}"