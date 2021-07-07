class TrailsSerializer < ApplicationSerializer
  attributes :id, :name, :description, :hour_open, :hour_close
  belongs_to :user
end
