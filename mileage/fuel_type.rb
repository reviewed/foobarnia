require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
fuel_choice = seeker.pick_fuel_type(ARGV[0])

# Directions: run ruby fuel_type.rb <fuel type> 
# where fuel type is either diesel, hamsters, propane, gas, hybrid 


