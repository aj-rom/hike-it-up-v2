class TrailSerializer < ApplicationSerializer
  attributes :id, :name, :description, :hour_open, :hour_close, :images, :user_id
  set_type :trail
end
