class Auto
  attr_reader :color, :price, :mileage, :fuel

  def initialize data
    @color = data[1]
    @price = data[2] || 0.0
    @mileage = data[3]
    @fuel = data[4]
  end

  def method_missing(method, *args, &block); end
end
