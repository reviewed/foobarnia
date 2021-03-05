require './auto'

class AutoSeeker
 
  def initialize data
    @data = data
  end

  # match is ARGV value 
  def filter key, match
    @autos = autos.select do |auto|
      auto.send(key) == match
    end
  end

  def autos
    @autos ||= @data.map do |row|
         Auto.new(row) 
    end
  end

  def self.median_mileage autos
    mileage = autos.collect(&:mileage).sort  
    (mileage[(mileage.length - 1) / 2] + mileage[mileage.length / 2]) / 2.0
  end


  def filter_by_price choice 
    if choice == "low" 
      cars = autos.select{ |a| a.price.to_i <= 20000 } 
      p "there are #{cars.length} #{choice}priced cars. "
    elsif choice == "medium"
      cars = autos.select{ |a| a.price.to_i > 20000 && a.price.to_i < 30000 }
      p "there are #{cars.length} #{choice}-priced cars."
    elsif choice == "high"
      cars = autos.select{ |a| a.price.to_i >=30000} 
      p "there are #{cars.length} #{choice}-priced cars."
    else
      p "Try again: choices are low medium or high"
    end 
  end 
  # to print all cars of a choice: #{cars} 
  # could refactor to switch/case
  # what would it look like with #sort first/instead


  def filter_by_fuel_type choice 
    cars = autos.select do  |a|
      if a.fuel
        a.fuel.to_s == choice 
      end
    end
    p "There are #{cars.length} #{choice}-fueled cars." 
  end 
  # add catch for missing data, here, in auto.rb
  # add type-catch, in case of weird data 
end
