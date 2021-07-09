class TrailsSerializer < ApplicationSerializer
  attributes :id, :name, :description, :open_at, :close_at, :user_id
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
