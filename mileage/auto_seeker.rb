require './auto'

class AutoSeeker

  def initialize data
    @data = data
  end

  def filter key, match
    @autos = autos.select do |auto|
      auto.send(key).downcase == match.downcase
    end
  end

  def filter_range key, lower, upper
    @autos = autos.select do |auto|
      (not auto.send(key).nil?) && auto.send(key).to_i >= lower.to_i && auto.send(key).to_i <= upper.to_i
    end
  end

  def autos
    @autos ||= @data.map do |row|
      Auto.new(row)
    end
  end

  def self.median_mileage autos
    prices = autos.collect(&:mileage).reject{ |p| p.to_s.empty? }.sort
    (prices[(prices.length - 1) / 2].to_f + prices[prices.length / 2].to_f) / 2.0
  end
end
