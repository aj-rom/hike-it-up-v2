class TrailSerializer < ApplicationSerializer
  attributes :id, :name, :description, :address, :user_id
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

  attribute :address_attributes, &:address

  class << self
    def convert_time(time_string)
      time = time_string.split(':')
      first = time.first.to_i
      return "#{time_string} AM" if first <= 12

      "#{first - 12}:#{time.last} PM"
    end
  end
end
