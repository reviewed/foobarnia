class Auto
  attr_reader :color, :price, :name, :mileage, :fuel

  def initialize data
    @color = data[1]
    @price = data[2] || 0.0
    @mileage = data[3].to_f 
    @fuel = data[4] || "unknown"
  end

end

# csv data structured: 
# id,color,price,mileage,fuel
# 1,Violet,39716.78,42.2,diesel
# 2,Teal,10735.37,24.3,diesel
# 3,Orange,,34.9,hamsters