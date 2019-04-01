require "minitest/autorun"
require "./auto_seeker"

describe AutoSeeker do
  before do
    data = [
      [1,'Red',12999,20.0,'gas'],
      [2,'Blue',13999,25.0,'gas'],
      [3,'Teal',19000,27.0,'gas'],
      [4,'Red',14999,40.0,'diesel'],
      [5,'Teal',14999,nil,'diesel'],
      [6,'Teal',14999,32.0,'electric'],
    ]
    @seeker = AutoSeeker.new data
  end


  describe "#filter " do
    it "can filter by color " do
      @seeker.filter! :color, 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end
  end

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 27.0
    end

    it "calculates median mileage for all Teal cars" do
      @seeker.filter! :color, 'Teal'
      AutoSeeker.median_mileage(@seeker.autos).must_equal 29.5
    end
  end
end
