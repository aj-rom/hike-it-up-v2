class UserSerializer < ApplicationSerializer
  attributes :id, :email
  set_type :user

  attribute :trail_count do |obj|
    obj.trails.nil? ? 0 : obj.trails.length
  end
end
