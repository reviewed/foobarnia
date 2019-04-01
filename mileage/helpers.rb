module CLI
  def self.paramaterize(arg)
    if arg.start_with? '--'
      filter, value = arg[2..-1].split('=')
      is_range = value.include? '-'
      value = is_range ? value.split('-') : value
      value = is_range ? value.first.to_f..value.last.to_f : value 

      args = [filter.downcase.to_sym, value]
    else
      args = [:color, arg]
    end
  end
end