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
# filter autos based on input 
# input used to get the right choice 

  # def self.find_price_range(choice, autos)
  #   if choice == low
  #     low = autos.select{ |a| a[:price] <=20000 } 
  #     low_length = low.length
  #     p "there are #{low_length} low priced cars: #{low}"
  #   elsif choice == 2
  #     medium = autos.select{ |a| auto[:price] > 20000 && auto[:price] < 30000 }
  #     medium_length = medium.length
  #     p "there are #{medium_length} low priced cars: #{medium}"
  #   else choice == 3
  #     high = autos.select{ |a| a[:price] >=30000} 
  #     p "high priced cars: #{high.length}"
  #   end
  # end 



  def pick_fuel_type fuel_type

  end

end

