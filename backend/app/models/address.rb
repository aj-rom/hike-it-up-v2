class Address < ApplicationRecord
  belongs_to :trail, dependent: :destroy

  validates_presence_of :street, :city, :state, :zipcode

  validates_numericality_of :zipcode
  validates_length_of :state, maximum: 2
  validates_length_of :zipcode, maximum: 5

  # TODO : ADD FORMAT VALIDATIONS
  # ONLY ACCEPT CHARACTERS
  validates_format_of :street, format: { }
  validates_format_of :city, format: { }
  validates_format_of :state, format: { }

  # ONLY ACCEPT INTEGERS
  validates_format_of :zipcode
end
