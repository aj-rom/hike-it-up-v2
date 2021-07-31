class UserSerializer < ApplicationSerializer
  attributes :email
  has_many :trails
  set_type :user

  attribute :trail_count do |obj|
    obj.trails.nil? ? 0 : obj.trails.length
  end
end
