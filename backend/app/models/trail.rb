# frozen_string_literal: true

class Trail < ApplicationRecord
  # Active Storage
  has_many_attached :images, dependent: :destroy
  # Belongs to a User
  belongs_to :user

  # Check for presence of attributes
  validates_presence_of :name, :description, :open_at, :close_at

  # Validate length of name & description
  validates_length_of :name, maximum: 100, minimum: 3
  validates_length_of :description, maximum: 300, minimum: 15
end
