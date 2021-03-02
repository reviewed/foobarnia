require "minitest/autorun"
require "./auto_seeker"

describe AutoSeeker do
  before do
    data = [
      [1,'Red',12999,20.0,'gas'],
      [2,'Blue',13999,25.0,'gas'],
      [3,'Teal',19000,27.0,'gas'],
      [4,'Red',14999,40.0,'diesel'],
    ]
    @seeker = AutoSeeker.new data
  end

  describe "#filter " do
    it "can filter by color " do
      @seeker.filter 'color', 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end

    it "can filter by fuel type " do
      @seeker.filter 'fuel', 'gas'
      @seeker.autos.collect(&:fuel).uniq.must_equal ['gas']
    end

    it "can filter by price range " do
      min = 14000
      max = 18000
      @seeker.filter 'price', min, max
      @seeker.autos.select { |auto| auto.price >= min && auto.price <= max }.must_equal [@seeker.autos[3]]
    end
  end

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end

    it "calculates median mileage even with nil mileage values" do
      no_mileage_auto = Auto.new [5,'Puce',29999,nil,'hamsters']
      joined_array = @seeker.autos << no_mileage_auto

      AutoSeeker.median_mileage(joined_array).must_equal 26.0
    end
  end
end
