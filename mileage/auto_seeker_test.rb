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
  end

describe "#filter " do
    it "can filter by valid mileage (!nil)" do
      @seeker.autos.collect(&:mileage).wont_be_nil()
    end
  end


  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end
  end

  describe ".fuel_type" do
    it "returns the number of cars that run on gas fuel type" do
      @seeker.filter 'fuel', 'gas'
      @seeker.autos.collect(&:color).count.must_equal 3 
    end
  end

   describe ".price_search" do
    it "returns the number of cars that match price searched" do
      @seeker.filter 'price', 19000
      @seeker.autos.collect(&:price).count.must_equal 1 
    end
  end
end
