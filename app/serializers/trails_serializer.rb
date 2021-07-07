class TrailsSerializer < ApplicationSerializer
  attributes :id, :name, :description
  belongs_to :user
end
