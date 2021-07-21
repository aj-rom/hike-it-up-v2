# frozen_string_literal: true

class Trail < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_one :address

  # Check for presence of attributes
  validates_presence_of :name, :description, :open_at, :close_at, :address

  # Validate length of name & description
  validates_length_of :name, maximum: 100, minimum: 3
  validates_length_of :description, maximum: 300, minimum: 15
end
