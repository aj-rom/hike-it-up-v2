class Address < ApplicationRecord
  belongs_to :trail, dependent: :destroy

  validates_presence_of :street, :city, :state, :zipcode

  validates_numericality_of :zipcode
  validates_length_of :state, maximum: 2
  validates_length_of :zipcode, maximum: 5

  validates_format_of :street, with: /\d*[a-zA-Z]*\s*/,
                               message: 'Invalid format! Must only contain letters and numbers.'
  validates_format_of :city, with: /([A-Z][a-zA-Z]*\s*)/,
                             message: 'Only letters are allowed, each new word must start with a capital letter.!'
  validates_format_of :state, with: /[A-Z]{2}/,
                              message: 'Only two capital letters are allowed'

  # ONLY ACCEPT INTEGERS
  validates_format_of :zipcode, with: /\d{5}/, message: 'Only five numbers are allowed!'
end
