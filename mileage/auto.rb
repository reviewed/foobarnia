class Auto
  attr_reader :color, :price, :name, :mileage, :fuel

  def initialize data
    @color = data[1]
    @price = data[2].to_f || 0.0
    @mileage = data[3]
    @fuel = data[4]
    raise ArgumentError, "Missing mileage" if @mileage.nil?
  end
end
