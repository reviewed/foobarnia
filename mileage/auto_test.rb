require "minitest/autorun"
require "./auto"

describe Auto do
  describe "#create " do
    it "creates an Auto if all data present" do
      car = Auto.new([4,'Red',14999,40.0,'diesel'])
      car.must_be_instance_of Auto
    end

    it "throws an exception when missing mileage" do
      proc { 
        Auto.new([4,'Red',14999,nil,'diesel']) 
      }.must_raise ArgumentError
    end
  end
end
