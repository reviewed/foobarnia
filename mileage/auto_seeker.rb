require './auto'

class AutoSeeker

  def initialize data
    @data = data
  end

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
    cleaned_array = []
    p autos.collect(&:mileage)
    for i in autos.collect(&:mileage) do 
      if i == nil
      cleaned_array.push("0")
      else 
      cleaned_array.push(i)
      end
    end
    prices = cleaned_array.sort
    (prices[(prices.length - 1) / 2].to_f + prices[prices.length / 2].to_f) / 2.0
  end

  def self.fuel_type autos
    car_fuel_array = autos.select(&:fuel)
    car_fuel_array.count
  end

  def self.price_search autos
    car_price_array = autos.select(&:price)
    car_price_array.count
  end

  # def price_range arr, lower, upper
  #  car_price_array.count{|v| v.between?(lower, upper)}
  # end

end
