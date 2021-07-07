class TrailSerializer < ApplicationSerializer
  attributes :id, :name, :description, :images
  belongs_to :user
  set_type :trail
end
