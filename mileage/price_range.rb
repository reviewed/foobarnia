require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
autos = seeker.filter(:price, ARGV[0])

if autos.length == 0
  abort "no autos with price #{ARGV[0]} found"
end

price = AutoSeeker.price_search(autos)

puts "#{price} car found at the price of $#{ARGV[0]} "