class TrailsSerializer < ApplicationSerializer
  attributes :id, :name, :description, :hour_open, :hour_close, :user_id
  set_type :trail
end
