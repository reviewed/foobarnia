require './auto'

class AutoSeeker

  def initialize data
    @data = data
  end

  def filter key, *args
    @autos = autos.select do |auto|
      if (key == 'price')
        auto.price >= args[0] && auto.price <= args[1]
      else
        auto.send(key) == args[0]
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
