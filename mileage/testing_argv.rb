# learning ARGV

# input_array = ARGV

# p input_array.length 
# p input_array.to_s
# first_arg, *the_rest = ARGV

first_arg, second_arg, *the_rest = ARGV
p first_arg
p second_arg
p the_rest