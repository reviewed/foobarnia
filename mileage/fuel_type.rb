require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
autos = seeker.filter(:fuel, ARGV[0])

if autos.length == 0
  abort "no autos with fuel type #{ARGV[0]} found"
end

fuel = AutoSeeker.fuel_type(autos)

puts "#{fuel} cars run on fuel type: #{ARGV[0]} "