require './auto'

class AutoSeeker

  def initialize data
    @data = data
  end

  def filter key, match, *args
    if (key == 'price')
      upper_price = args[0]
      @auto = autos.select do |auto|
        auto.price >= match && auto.price <= upper_price
      end
    else
      @autos = autos.select do |auto|
        auto.send(key) == match
      end
    end
  end

  def autos
    @autos ||= @data.map do |row|
      Auto.new(row)
    end
  end

  def self.median_mileage autos
    prices = autos.collect(&:mileage).compact.sort
    (prices[(prices.length - 1) / 2].to_f + prices[prices.length / 2].to_f) / 2.0
  end
end
