require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
fuel_choice = seeker.filter_by_fuel_type(ARGV[0])

# Directions: run ruby fuel_type.rb <fuel> 
# where <fuel> is either diesel, hamsters, propane, gas, hybrid 


