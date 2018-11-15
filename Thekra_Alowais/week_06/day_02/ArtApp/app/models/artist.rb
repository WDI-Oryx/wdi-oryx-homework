class Artist < ApplicationRecord
  has_many :paintings

  has_many :categories, through: :paintings
end
