require "minitest/autorun"
require "./auto_seeker"

describe AutoSeeker do
  before do
    data = [
      [1,'Red',12999,20.0,'gas'],
      [2,'Blue',13999,25.0,'gas'],
      [3,'Teal',19000,27.0,'gas'],
      [4,'Red',14999,40.0,'diesel'],
      [5,'Red',14999,nil,'diesel'],
    ]
    @seeker = AutoSeeker.new data
  end


  describe "#filter " do
    it "can filter by color " do
      @seeker.filter 'color', 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end
    it "can filter by fuel" do
      @seeker.filter 'fuel', 'gas'
      @seeker.autos.collect(&:fuel).uniq.must_equal ['gas']
    end
  end


  describe "#filter_range " do
    it "can filter by mileage " do
      @seeker.filter_range 'mileage', '20', '30'
      AutoSeeker.median_mileage(@seeker.autos).must_equal 25.0
    end
  end

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end
  end
end
