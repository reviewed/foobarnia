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

# add test: data has all 5 values? But that would only check the data that's here in the test. 
#seems like the testing for this would actually go in the code, but perhaps I'm thinking in Rails. 


  describe "#filter " do
    it "can filter by color " do
      @seeker.filter 'color', 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end
  end 

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end
  end

  describe "#filter_by_price" do 
    it "filters for three different price ranges" do 
      @seeker.filter_by_price 'low'
      # undertain how to set this test up 
      @seeker.autos.select(&:price)
      # assert_operator calculation :< 20000
    end 
  end 

  describe "#filter_by_fuel_type" do
    it "filters for choice of fuel and returns the number of cars of that fuel" do
    @seeker.filter_by_fuel_type 'gas'
    # @seeker.autos.select(&:fuel).must_equal [4]
    end 
  end 
end