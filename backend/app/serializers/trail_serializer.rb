class TrailSerializer < ApplicationSerializer
  attributes :id, :name, :description, :address
  set_type :trail

  attribute :open_at do |obj|
    converted = convert_time obj.open_at
    converted
  end

  attribute :close_at do |obj|
    converted = convert_time obj.close_at
    converted
  end

  attribute :formatted_address do |obj|
    obj = obj.address
    "#{obj.street}, #{obj.city}, #{obj.state} #{obj.zipcode}"
  end

  private

  def convert_time(time_string)
    time = time_string.split(':')
    return "#{time_string} AM" if time.first.to_i <= 12

    "#{time.first.to_i - 12}:#{time.last} PM"
  end
end
