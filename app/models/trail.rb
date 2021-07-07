class Trail < ApplicationRecord
  has_many_attached :images, dependent: :destroy
  belongs_to :user
end
