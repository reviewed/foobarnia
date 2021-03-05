require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
choice = seeker.filter_by_price(ARGV[0])


# Directions: run ruby prices.rb <price_range> 
# where <price_range> is either low, medium or high

# # next: divide autos by price, so ARGV input can match 
# # 1/low < 20,000
# # 2/medium >20,001 and >30,000
# # 3/high >30,001
