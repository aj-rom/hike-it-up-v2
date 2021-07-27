class UserSerializer < ApplicationSerializer
  attributes :id, :email
  set_type :user
end
