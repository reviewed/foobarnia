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
    prices = autos.collect(&:mileage).sort
    (prices[(prices.length - 1) / 2].to_f + prices[prices.length / 2].to_f) / 2.0
  end
end
