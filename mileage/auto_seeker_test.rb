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
    it "can filter by color" do
      @seeker.filter 'color', 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end

    it "can filter by price range" do
      @seeker.filter 'price', 13000, 14999
      @seeker.autos.collect(&:price).must_equal [13999, 14999]
    end

    it "can filter by fuel type" do
      @seeker.filter 'fuel', 'diesel'
      @seeker.autos.collect(&:fuel).must_equal ['diesel']
    end
  end

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end

    it "calculates median mileage when values are nil" do
      data_with_nil = [
        [2,'Blue',13999,25.0,'gas'],
        [3,'Teal',19000,27.0,'gas'],
        [5,'Teal',14999,nil,'diesel']
      ]
      @seeker = AutoSeeker.new data_with_nil
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end
  end
end
