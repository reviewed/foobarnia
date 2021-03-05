require 'csv'

CSV.foreach( 'test.csv') do |row|
 	puts row.inspect
end 

# can also do:
CSV.read('test.csv')