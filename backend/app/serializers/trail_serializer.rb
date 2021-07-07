class TrailSerializer < ApplicationSerializer
  attributes :id, :name, :description, :hour_open, :hour_close,:images
  belongs_to :user
  set_type :trail
end
