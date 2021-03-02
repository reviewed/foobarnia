require 'csv'
require './auto_seeker'

filters = ['color', 'mileage', 'fuel']
data = CSV.read('foobarnian_autos.csv')

if ARGV.length < 2
  abort  '  First argument must be either color || mileage || fuel
  1 argument is then required for color || fuel and 2 is required for mileage.'
end

seeker = AutoSeeker.new data

filter = ARGV[0]
arg1 = ARGV[1]

if filter == 'color'
  autos = seeker.filter(:color, arg1)
end

if filter == 'fuel'
  autos = seeker.filter(:fuel, arg1)
end

if filter == 'mileage'
  if ARGV.length < 3
    abort 'If filtering by mileage then you need to specify a range'
  end
  autos = seeker.filter_range(:mileage, arg1, ARGV[2])
end

if autos.length == 0
  abort "no autos found with #{filter} of #{arg1}"
end

mileage = AutoSeeker.median_mileage(autos)

puts "median mileage = #{mileage} MPG"
