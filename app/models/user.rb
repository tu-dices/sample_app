class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :name, length: { maximum: 50 }
  validates :email, length: { maximum: 255 }
end
