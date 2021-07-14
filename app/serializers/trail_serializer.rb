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
end
