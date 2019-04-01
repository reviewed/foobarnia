require 'csv'
require './helpers'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
ARGV.each do |arg|
  args = CLI.paramaterize(arg)
  puts "*" * 50
  puts "Adding filter: #{args.first} should be #{args.last}"
  puts "*" * 50
  seeker.filter!(*args)
end
autos = seeker.autos

if autos.length == 0
  abort "No autos found"
end

mileage = AutoSeeker.median_mileage(autos)

puts "median mileage = #{mileage} MPG"
