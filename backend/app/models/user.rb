class User < ApplicationRecord
  has_many :trails

  validates :email, email: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_create do
    self.auth_token = Devise.friendly_token(20)
  end
end
