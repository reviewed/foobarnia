class Auto
  attr_reader :row_id, :color, :price, :name, :mileage

  def initialize data
    @row_id = data[0]
    @color = data[1]
    @price = data[2] || 0.0
    @mileage = data[3]
    @fuel = data[4]
  end
end
