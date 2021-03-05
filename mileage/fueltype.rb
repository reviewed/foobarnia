require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
fuel_type = seeker.pick_fuel_type(ARGV[0])